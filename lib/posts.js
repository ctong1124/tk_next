import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


export function getSortedPostsData({ type, n = 'all'}) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  const fileNames = fs.readdirSync(postsDirectory);
  // reverse in order to get most recent first and only return num of needed posts
  // const neededPosts = n === 'all' ? fileNames.reverse() : fileNames.reverse().slice(0, n);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const matterData = matterResult.data;
    const data = {
      ...matterData,
      publishDate: JSON.parse(JSON.stringify(matterData.publishDate)),
    };

    // Combine the data with the id
    return {
      id,
      ...data,
    }
  })
  const postsData = allPostsData.sort((a, b) => {
    if (a.publishDate < b.publishDate) {
      return 1
    } else {
      return -1
    }
  });
  return n === 'all' ? postsData.reverse() : postsData.reverse().slice(0, n);
}
//
// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')
//
//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')
//
//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)
//
//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   })
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

export function getAllPostIds(type) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  })
}

export async function getPostData({ type, id}) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const matterData = matterResult.data;
  const data = {
    ...matterData,
    publishDate: JSON.parse(JSON.stringify(matterData.publishDate)),
  };

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...data,
  }
}

export function getPostDataNoBody({ type, id }) {
  const postsDirectory = path.join(process.cwd(), 'data', type);
  const fullPath = path.join(postsDirectory, `${id}.md`)
  // console.log('fullPath', fullPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const matterData = matterResult.data;
  const data = {
    ...matterData,
    publishDate: JSON.parse(JSON.stringify(matterData.publishDate)),
  };

  // Combine the data with the id and contentHtml
  return {
    id,
    ...data,
  };
}

export function getYamlData(file) {
  const fullPath = path.join(process.cwd(), file);
  // console.log('fullPath', fullPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  return {
    ...matterResult.data,
  };
}
