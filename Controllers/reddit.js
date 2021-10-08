const mongoose= require("mongoose");
const validator=require("./validator");
var axios = require("axios").default;
 
let urls=['https://www.reddit.com/r/wallstreetbets/top/', 'https://www.reddit.com/r/stocks/top', 'https://www.reddit.com/r/daytrading/top', 'https://www.reddit.com/r/IndiaInvestments/top'];

module.exports=async (req, res)=>{
  const connection=await mongoose.connect("mongodb+srv://JohnSamuel:jas@cluster0.sxjym.mongodb.net/UserData?retryWrites=true&w=majority");
  let x=await validator(req.body.pno, req.body.tokenval);

  if(!x){
      res.send(require("./badRequest"));
  }
 
  let posts=[];
  for(i=0;i<urls.length;i++){
    console.log(urls[i]);
      var options = {
          method: 'GET',
          url: 'https://reddit3.p.rapidapi.com/subreddit',
          params: {url: urls[i]},
          headers: {
            'x-rapidapi-host': 'reddit3.p.rapidapi.com',
            'x-rapidapi-key': 'b456b25e18mshbff7faf3edd36c4p1e3810jsne4cffc7826c2'
          }
        };
    
        //title, upvote_ratio, ups, total_awards_received, url_overridden_by_dest, permalink
        await axios.request(options).then(function (response) {
            let allposts=response.data.posts;
            for(i=0;i<allposts.length;i++){
              
              posts.push({
                sub:allposts[i].subreddit,
                title:allposts[i].title,
                upvoteRatio:allposts[i].upvote_ratio,
                upvotes:allposts[i].ups,
                link:"https://www.reddit.com"+allposts[i].permalink,
                otherLinks:allposts[i].url_overridden_by_dest,
            });
          }
            //console.log(allposts);
            }).catch(function (error) {
            console.error(error);
      });
    }
  res.send({
      posts:posts
  });
}
