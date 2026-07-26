export function searchData(data,value){

    return data.filter((photo)=>{

        return photo.title
        .toLowerCase()
        .includes(value.toLowerCase());

    });

}