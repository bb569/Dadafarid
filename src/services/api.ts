import axios from "axios";

export const client = axios.create({
    baseURL:"http://localhost:7000"
})
export async function Login(username:string,password:string) {
    // const {data} = 
    await client({
        method:"POST",
        url:"/login",
        data:{
            username,
            password,
        }
    })
    
}
export async function price(price:number) {
    // const {data} = 
    await client({
        method:"POST",
            data:{
            price
        }
    })
    
}
export async function getProducts() {
    const {data} = await client("/accessoris")
    return data
    
}
export async function getProduct(id:number|string) {
    const {data} = await client(`/product/${id}`)
    return data
    
}
export async function getProducts2() {
    const {data} = await client("/assemblies")
    return data
    
}
export async function getProducts3() {
    const {data} = await client("/battery")
    return data
    
}
export async function getProducts4() {
    const {data} = await client("/bracelet")
    return data
    
}
export async function getProducts5() {
    const {data} = await client("/car")
    return data
    
}
export async function getProducts6() {
    const {data} = await client("/carpet")
    return data
    
}
export async function getProducts7() {
    const {data} = await client("/clothes")
    return data
    
}
export async function getProducts8() {
    const {data} = await client("/decorations")
    return data
    
}
export async function getProducts9() {
    const {data} = await client("/digital")
    return data
    
}
export async function getProducts10() {
    const {data} = await client("/earrings")
    return data
    
}
export async function getProducts11() {
    const {data} = await client("/glasses")
    return data
    
}
export async function getProducts12() {
    const {data} = await client("/home")
    return data
    
}
export async function getProducts13() {
    const {data} = await client("/industrial")
    return data
    
}
export async function getProducts14() {
    const {data} = await client("/laptop")
    return data
    
}
export async function getProducts15() {
    const {data} = await client("/legal")
    return data
    
}
export async function getProducts16() {
    const {data} = await client("/material")
    return data
    
}
export async function getProducts17() {
    const {data} = await client("/necklace")
    return data
    
}
export async function getProducts18() {
    const {data} = await client("/ornaments")
    return data
    
}
export async function getProducts19() {
    const {data} = await client("/personal")
    return data
    
}
export async function getProducts20() {
    const {data} = await client("/phone")
    return data
    
}
export async function getProducts21() {
    const {data} = await client("/ring")
    return data
    
}
export async function getProducts22() {
    const {data} = await client("/service")
    return data
    
}
export async function getProducts23() {
    const {data} = await client("/shoes")
    return data
    
}
export async function getProducts24() {
    const {data} = await client("/sofa")
    return data
    
}
export async function getProducts25() {
    const {data} = await client("/spare")
    return data
    
}
export async function getProducts26() {
    const {data} = await client("/stationery")
    return data
    
}
export async function getProducts27() {
    const {data} = await client("/tablet")
    return data
    
}
export async function getProducts28() {
    const {data} = await client("/tool")
    return data
    
}
export async function getProducts29() {
    const {data} = await client("/watch")
    return data
    
}

export async function productData(id: string) {
    try {
        const response = await client.get(`/products/${id}`); 
        return response.data; 
    } catch (error) {
        throw new Error('Product not found'); 
    }
}