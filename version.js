// // const sorting=(sort)=>{

// //     arr=[]
// //     obj1={}
// //     for(i in sort){
// //         arr.push(sort[i])
// //     }
// //     arr.sort(function st(a,b){
// //         return a-b
// //     })
// //     for(j of arr){
// //         for(k in sort){
// //             if(j==sort[k]){
// //                 obj1[k=sort[k]]
// //             }
// //         }
// //     }
// //     return(obj1)
// // }
// // paidbyA=1000,
// // paidbyB=250,
// // paidbyC=750
// // paidbyD=1250

// // avg=(paidbyA+paidbyB+paidbyC+paidbyD)/4
// // emptobj= {}
// // persontopay= {}
// // persontoget= {}
// // emptobj ['A']= paidbyA-avg
// // emptobj ['B']= paidbyB-avg
// // emptobj ['C']= paidbyC-avg
// // emptobj ['d']= paidbyD-avg
// // console.log(emptobj)
// // srt=sorting(emptobj) 


// // for(i in srt){
// //     if(srt[i]>0){
// //         persontoget[i]=emptobj[i]
// //     }else if(srt[i]<0){
// //         persontopay[i]=emptobj[i]
// //     }
// // }
// // console.log(persontoget)
// // console.log(persontopay)

// // for(j in persontopay){
// //     for(k in persontoget){
// //         console.log(`${j}has rs ${(persontopay[j])}to ${[k]}`)
// //     }
    
// // }



// A=1000
// B=4000
// C=1000
// G=5000
// avg=(A+B+C+G)/4
// console.log("the average:"+avg)
// emptyobj1={}
// emptyobj2={}
// d={a:A-avg,b:B-avg,c:C-avg,g:G-avg}
// console.log("settlement:",d)
// for(i in d){
//     if(d[i]==0){
//         console.log(i+"no nedd to pay")
//     }
//     else if(d[i]<0){
//         xy[i]=d[i]
//     }
//     else if(d[i]>0){
//         ma[i]=d[i]
//     }
// }
// console.log("Amount have to get:",ma)()
// console.log("Amount have to pay",xy)


var version=[
    {name:"whatsapp",
    up_version:"2022-08-25",
    bug:"hhh",
    auther:"jan koum " & "brain acton",
    types:["yowhatsapp","fmwhatsapp","ogwhatsapp","gpwhatsapp"]},

    {name:"instagram",
    up_version:"2022-02",
    bug:"456",
    auther:"kevin",
    types:["jjjjjjjj","kkkkkkkk","llllll","ccccccc"]},

    {name:"hhhhhh",
    up_version:"2022-06-24",
    bug:'jjjj',
    auther:"llll",
    types:["kkkkkkk","llllll","nnnnnnn"]},

    {name:"kkkkk",
    up_version:"2022-07-27",
    bug:"890",
    auther:"llll",
    types:["hhhhh","lllll","mmmm","uuuuu"]}

]
// function seperat(object){
//     arr=[]
//     count=0
//     for(i in object){
//         arr.push(object[i])
//     }
//     count++
//}
// const separation=(object)=>{
//     for(i in object ){
//         object[i]=object[i]
//     }
// }

// for(j in version){
//     version[j]=seperation(object[i])
// }
// console.log(version)


console.table(version)
//  function seperate(){
//     for( var i=0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// }

// arr_1=console.map(n=>n.up_version)
update=version.map(n=>n.up_version)
// console.log(update)
bugs=version.map(n=>n.bug)
// console.log(bugs)
sof_auther=version.map(n=>n.auther)
emt_obj={}
for(i in sof_auther){
    if(i in emt_obj){
        emt_obj[i]+=1
    }else{
        emt_obj[i]=1
    }
}console.log(emt_obj)
// sppp=sof_auther.split('')
// console.log(sppp)
 console.log(sof_auther)
types_of_soft=version.map(n=>n.types)
// console.log(types_of_soft)


  