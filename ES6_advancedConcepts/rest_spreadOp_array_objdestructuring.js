//rest operator exa1
    // let total=0;
    // function sum(...num){
    //     for(let i of num){
    //         total += i;
    //     }
    //     console.log(total);
    // }
    // sum(1,2,3,4,5);

//spread operator
    // let arr1=[1,2,3];
    // let arr2=[...arr1,4,5,6];
    // console.log(arr2);

//spread operator also used with object
    // const obj1={a:1,
    //             b:2};
    // const obj2={...obj1,c:3};
    // console.log(obj2);
//array destructuring
    // const arr=["saba azeem",24,'f',["zainab",21,'f']];
    // const [myname,age,gender,[zname,zage,zgender]]=arr;
    // console.log(myname);
    // console.log(age);
    // console.log(gender);
    // console.log(zname);
//obj destructuring
    let book={
        bookName:"quran",
        surah:30,
        pubName:{
            pub_name:"saba",
            location:"lahore"
        }
    };
    let{bookName:bname,surah,price=200,pubName:{pub_name,location}}=book;
    
    console.log(bname); //obj mai nam direct change nhi kr skte array ki tra
    console.log(price); //default value
    console.log(location);