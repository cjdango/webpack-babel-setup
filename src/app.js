async function getPosts() {

    // Fetch data as promise<response>
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    // Convert to promise<json>
    const data = await response.json()
    
    return data

}

//  Append data into the DOM, inserted in div.posts
function showData(posts) {

    let ul_element = document.createElement('ol')

    let posts_element = document.querySelector('.posts')

    posts.forEach(item => {

        let title_element = document.createElement('li')

        title_element.innerHTML = item.title

        ul_element.appendChild(title_element)

    })

    posts_element.appendChild(ul_element)

}

//  Call getPost() then call showData
getPosts().then(posts => showData(posts))



