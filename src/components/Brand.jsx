async function getData() {
  const res = await fetch('https://agency.teamrabbil.com/api/BrandList')
   
  
   if (!res.ok) {
     // This will activate the closest `error.js` Error Boundary
     throw new Error('Failed to fetch data')
   }
  
   return res.json()
 }
 
 
 async function Brand (){
   const data= await getData()
  //  console.log(data)
   return (
     <>
       <section className="py-20">
         <div className="container mx-auto px-4">
           <div className="flex flex-wrap -mx-2">
            {
             data.map((item, i)=>{
              
               return  <div key={item.id} className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
               <div className="py-16 bg-gray-50 rounded">
                 <a href="#">
                   <img
                     className="mx-auto h-8"
                     src={item.image}
                     alt={item.title}
                   />
                 </a>
               </div>
             </div>
 
             })
            }
             {/* <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
               <div className="py-16 bg-gray-50 rounded">
                 <a href="#">
                   <img
                     className="mx-auto h-8"
                     src="atis-assets/logo/brands/dropbox.png"
                     alt=""
                   />
                 </a>
               </div>
             </div>
             <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
               <div className="py-16 bg-gray-50 rounded">
                 <a href="#">
                   <img
                     className="mx-auto h-8"
                     src="atis-assets/logo/brands/spotify.png"
                     alt=""
                   />
                 </a>
               </div>
             </div>
             <div className="w-full md:w-1/2 lg:w-1/4 px-2">
               <div className="py-16 bg-gray-50 rounded">
                 <a href="#">
                   <img
                     className="mx-auto h-8"
                     src="atis-assets/logo/brands/stripe.png"
                     alt=""
                   />
                 </a>
               </div>
             </div> */}
           </div>
         </div>
       </section>
     </>
   );
 };
 
 export default Brand;
 