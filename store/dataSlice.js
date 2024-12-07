import { create } from 'zustand';
import { slugify  } from 'transliteration';


const useDataStore = create((set) => ({
   baseApi: 'http://165.227.148.224/',
   introSlider: [],
   parentCategories: [],
   allProducts : [],
   requestText : '',
   projects : [],
   partners : [],
   news : [],
   blogs : [],
   aboutContent : [],
   environmentalPolicy : [],
   laboratoryDevices : {},
   laboratoryResults : [],
   certificates : [],
   fetchIntroSlider: async (lang) => {
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/slider/`).then(res => res.json())
    set({ introSlider: data.results });
   },
   fetchCategories : async (lang) => {
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/categories/`).then(res => res.json())
    
    set({ parentCategories : data.results
        .filter(item => item.parent_category === null) 
        .map(item => ({
          ...item,
          slug: slugify(item.name, {
            lower: true
          }),
        }))});
    
   },
   fetchProducts : async (lang) => {
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/products/`).then(res => res.json())
    set({ allProducts: data.results });

   },
   fetchRequestText : async (lang) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/request_text/`).then(res => res.json())
    set({ requestText: data.results[0].text });
   } ,
   fetchProjects : async (lang) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/projects/`).then(res => res.json())
    set({ projects: data.results });
   } ,
   fetchPartners : async (lang) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/partners/`).then(res => res.json())
    set({ partners: data.results });
    
   } ,
   fetchNews : async (lang) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/news/`).then(res => res.json())
    set({ news: data.results });
    
   } ,
   fetchBlogs : async (lang) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/blogs/`).then(res => res.json())
    set({ blogs: data.results });
    
   } ,
   fetcAboutContent : async (lang) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/about/`).then(res => res.json())
    const data2 = await fetch(`${baseApi}${lang}/api/policies/`).then(res => res.json())
    set({ aboutContent: data.results });
    set({ environmentalPolicy: data2.results });
    
   } ,
   fetcLaboratory : async (lang, page) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/devices/?page=${page}`).then(res => res.json())
    const data2 = await fetch(`${baseApi}${lang}/api/device_test_results/`).then(res => res.json())
    set({ laboratoryDevices: data });
    set({ laboratoryResults: data2.results });
    
   },
   fetchCertificates : async (lang, page) =>{
    const { baseApi } = useDataStore.getState();
    const data = await fetch(`${baseApi}${lang}/api/certificates/?page=${page}`).then(res => res.json())
    set({ certificates: data });
    
   } ,
   reset: () => {
    set({introSlider : []});
    set({parentCategories : []});
    set({allProducts : []});
    set({requestText : ''});
    set({projects : []});
    set({news : []});
    set({blogs : []});
    set({aboutContent : []});
    set({environmentalPolicy : []});
    set({laboratoryDevices : {}});
    set({laboratoryResults : []});
    set({certificates : []});
   }
}));


export default useDataStore;