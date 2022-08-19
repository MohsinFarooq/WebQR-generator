self.addEventListener('install', evt =>{
    console.log('service worker is installed')
});

self.addEventListener('activate', evt =>{
    console.log('service worker has been activated')
});

self.addEventListener('fetch', evt =>{
    console.log('fetch', evt);
});