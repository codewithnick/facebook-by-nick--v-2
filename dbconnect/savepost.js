module.exports = async function dbconnect(req,res,client)
{var mongodb=require('mongodb');
       try {       
        var result =await client.db('profile').collection('post').findOne({_id:mongodb.ObjectId(req.body.id)})
        //console.log(result);
        if (result.saves.includes(req.session.username)){
            result =await client.db('profile').collection('post').updateOne(
                {_id:mongodb.ObjectId(req.body.id)},{$pull:{saves:req.session.username}})
        }
        else{
            result =await client.db('profile').collection('post').updateOne(
                {_id:mongodb.ObjectId(req.body.id)},{$push:{saves:req.session.username}})
        }

    } catch (e) {
    } 
    res.end('saved')
    
}
