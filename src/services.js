const apiUrl = import.meta.env.VITE_BE_URL;

console.log(apiUrl);

export const service = {
    increment() {
       return fetch(`${apiUrl}/increment`, {
           method: 'POST'
       }).then(res => {
            if(res.status === 200){
                return true
            }else {
                return false
            }
        })
    },
    decrement() {
         return fetch(`${apiUrl}/decrement`, {
             method: 'POST'
         }).then(res => {
            if(res.status === 200){
                return true
            }else{
                return false
            }
        })
    },
    getState(){
        return fetch(`${apiUrl}/getState`).then(res => {
            if(res.status === 200){
                return res.json()
            }else {
                return false;
            }
        })
    },

    resetCounter(){
        return fetch(`${apiUrl}/resetCounter`, {
            method: 'POST'
        }).then(res => {
            if(res.status === 200){
                return true;
            }else {
                return false;
            }
        })
    },
};