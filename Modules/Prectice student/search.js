// export function searchData(data,value){

//     return data.filter((photo)=>{

//         return photo.title
//         .toLowerCase()
//         .includes(value.toLowerCase());

//     });

// }

export function searchData(data, value) {

    value = value.toLowerCase().trim();

    return data.filter((photo) => {

        return (
            photo.id.toString().includes(value) ||
            photo.title.toLowerCase().includes(value)
        );

    });

}