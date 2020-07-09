module.exports=async function main(req,client){
    try {
        
        
        result=await client.db('profile').collection('user').updateOne({username:req.session.username},
            {$addToSet:{friends:req.query.text}});
        
    } catch (e) {
        console.log('error connecting to db');
        console.error(e);
    } 
}