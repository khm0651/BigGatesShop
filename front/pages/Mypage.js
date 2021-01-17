import React from "react";
import {Form, List, Button, Icon, Input, Card, Avatar} from "antd";
import Head from "next/head";



export const dummyUser ={
    nickname : '이태현',
    Post: [],
    Followings:[],

    Followers:[],

}


const Mypage=()=>{
    return(
        <>
            <Head>
                <title>NodeBird</title>
                <link rel ="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <div> 마이페이지 </div>
            <div>
                <Card style={{height:'300px'}}>
                    <Card.Meta style={{height:'30px'}}
                               avatar = {<Avatar style={avatarstyle}>{dummyUser.nickname[0]}</Avatar>}
                    />
                </Card>
            </div>
        </>

    );
};

const avatarstyle = {
    width: "100px",
    height: "100px",
    fontSize: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Mypage;

// import React from "react";
// import Head from "next/head";
// import AppLayout from "../components/AppLayout";
// import {Form, List, Button, Icon, Input, Card} from "antd";
// import NicknameEditForm from '../components/NicknameEditForm';
//
// const Profile =()=> {
//     return(
//         <div>
//          <Form style={{marginBottom: '20px', border:'1px solid #d9d9d9', padding:'20px'}}>
//             <Input addonBefore ='닉네임' />
//             <Button type= 'primary'> 수정</Button>
//         </Form>
//             <List
//                 style ={{marginBottom:"20px"}}
//                 grid={{gutter: 4, xs:2, md:3}}
//                 size ='small'
//                 header={<div>팔로잉 목록</div>}
//                 loadMore={<Button style ={{width:'100%'}}> 더보기 </Button>}
//                 bordered
//                 dataSource={['이태현','천재', '케이무브']}
//                 renderItem={item=>(
//                     <List.Item style ={{marginTop:'20px'}}>
//                         <Card actions={[<Icon key='stop' type = "stop"/>]}><Card.Meta description={item}/></Card>
//                     </List.Item>
//                 )}
//             />
//             <List
//                 style ={{marginBottom:"20px"}}
//                 grid={{gutter: 4, xs:2, md:3 }}
//                 size ='small'
//                 header={<div>팔로워 목록</div>}
//                 loadMore={<Button style ={{width:'100%'}}> 더보기 </Button>}
//                 bordered
//                 dataSource={['이태현','천재', '케이무브']}
//                 renderItem={item=>(
//                     <List.Item style ={{marginTop:'20px'}}>
//                         <Card actions={[<Icon key='stop' type = "stop"/>]}><Card.Meta description={item}/></Card>
//                     </List.Item>
//                 )}
//             />
//         </div>
//     );
// };
//
// export default Profile;