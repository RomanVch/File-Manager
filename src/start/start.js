export let userName = '';

export const start = ()=>{
    process.argv.forEach((item)=>{
        if(item.includes("--username=")){
            userName = item.replace("--username=",'')
        }
    })
    console.log(`Welcome to the File Manager, ${userName}!`)
}