async function list(){
    
   let post=await fetch('http://jsonplaceholder.typicode.com/posts/') 
    let posts = await post.json(); 
    
    posts = posts.filter(posts => posts.title.split(" ").length > 6)
    posts = posts.map(posts => posts.title)


    

    console.log(posts)
    
}

async function count(){

    let post=await fetch('http://jsonplaceholder.typicode.com/posts/') 
    
    
    let posts = await post.json(); 
    

    posts = posts.map(posts => posts.body)
    posts=posts.toString.replace('/',' ')
    //posts.toString()
   // console.log(posts.toString())
   var words = posts.toString().split(/[ \.\?!,\*'"]+/),
   seen = [],
   freq = [];
// get frequencies
    words.forEach(function (w) {
    var idx = seen.indexOf(w);
    if (idx >= 0) {
        freq[idx]++;
    }
    else {
        seen.push(w);
        freq.push(1);
    }
    });
    // produce the results array
    var r = [];
    seen.forEach(function (w, idx) {
    r.push( { text: w, freq: freq[idx] } );
    });

    console.log(r)
   

}