
var result=null;
var posts=null;
module.exports = async function dbconnect(req,res,client)
{   
       try {
        // Connect to the MongoDB cluster
        //await client.connect();
        console.log('client connected sucessfully');
        // Make the appropriate DB calls
        result=await client.db('profile').collection('user').findOne({username:req.params.username});
        myfriends=await client.db('profile').collection('user').findOne({username:req.session.username});
        posts=await client.db('profile').collection('post').find({username:req.params.username}).toArray();
        fans=await client.db('profile').collection('user').find({friends:req.params.username}).toArray();
        console.log(fans);
        //console.log(posts);
    } catch (e) {
        console.log('error connecting to db');
        console.error(e);
        await res.render('addmie.ejs')
    } finally {
        console.log('closing client connection');
        //await client.close();
        //console.log(myfriends);
        await res.render('profile.ejs',{userobj:result,postobj:posts,username:req.session.username,myfriends:myfriends.friends});
    }

}
