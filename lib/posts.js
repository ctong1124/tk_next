import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


// TODO: all or a certain number by filter, or random ones
export function getSortedPostsData(type) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  // console.log('fileNames', fileNames, fileNames.reverse());
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const matterData = matterResult.data;
    console.log('publishDate', matterData.publishDate, typeof(matterData.publishDate));
    const data = {
      ...matterData,
      // publishDate: JSON.parse(JSON.stringify(matterData.publishDate)),
      publishDate: matterData.publishDate,
    };

    // Combine the data with the id
    return {
      id,
      // ...data,
      ...matterData,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(type) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(type, id) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const matterData = matterResult.data;
  const data = {
    ...matterData,
    // publishDate: JSON.parse(JSON.stringify(publishDate.date)),
    publishDate: matterData.publishDate,
  };

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    // ...data,
    ...matterData,
  }
}
