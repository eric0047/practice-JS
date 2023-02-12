// 程式碼寫這裡
// document.addEventListener('DOMContentLoaded',() => {
//     const api = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
//     const search = document.querySelector('#searchKeyword')
//     const form = document.querySelector('#searchForm')



//     form.addEventListener('submit', (e) => {
//         e.preventDefault()

//         const query = search.value.trim()
        
//         if (query != ''){
//             fetch(api)
//             .then((resp) => {
//               return resp.json()
//             })
//             .then((sites) => {
//                 const siteList = document.querySelector('.siteList')
//                 siteList.innerHTML = ''

//                 sites.filter((site) => {
//                  return  site.ar.includes(query)
//               }).forEach((site) => {
//                 const item = `<li class="list-group-item fs-5">
//                 <i class="fas fa-bicycle"></i>
//                 ${site.sna.replace("YouBike2.0_", '')} ${site.sbi}<br>
//                 <small class="text-muted">${site.ar}</small>
//               </li>`

//                 siteList.insertAdjacentHTML('beforeend', item)
//               })

//             })
//         }

        
        
//     })
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const api = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

//   const keyword = document.querySelector('#searchKeyword')
//   const form = document.querySelector('#searchForm')

//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const query = keyword.value.trim()
    
//    if (query !== ''){
//     fetch(api)
//     .then((resp) => {
//       return resp.json()
//     })
//       .then((sites) => {
//          const siteList = document.querySelector('.siteList')
//          siteList.innerHTML = ''

//          sites.filter((site) => {
//             return site.ar.includes(query)
//          }).forEach((site) => {
//            const item = `<li class="list-group-item fs-5">
//                 <li class="fas fa-bicycle"></li>
//                  ${site.sna.replace("YouBike2.0_", '')} ${site.sbi}<br>
//                  <small class="text-muted">${site.ar}</small>
//                </li>`

//           siteList.insertAdjacentHTML('beforeend', item)
//          })
//       })
//    }

    
//   })

// })


$().ready(() =>{
  const api = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
  const keyword = $('#searchKeyword')
  const form = $('#searchForm')

  form.submit ((e) => {
    e.preventDefault()
    const query = keyword.val()  //跟上面不同!


    if (query !== ''){
      $.ajax({url: api}).done((sites) =>{
     
        const siteList = $('.siteList')
        siteList.html("")  //跟上面不同!
   
        sites.filter((site) => {
          return site.ar.includes(query)
       }).forEach((site) => {
         const item = `<li class="list-group-item fs-5">
         <li class="fas fa-bicycle"></li>
          ${site.sna.replace("YouBike2.0_", '')} ${site.sbi}<br>
          <small class="text-muted">${site.ar}</small>
        </li>`
   
        siteList.append(item)  //跟上面不同!
       })
     })
    }

    
 

  })
  

  
})