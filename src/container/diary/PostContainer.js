import Post from "../../components/Diary/Post";

const PostContainer = () => {
    const post = [
        {
            title: "오늘 수업시간 모습입니다.",
            date: "2021.11.11",
            contents: "열심히 수업에 참여한 00이입니다."
        },
        {
            title: "오늘 수업시간 모습입니다.",
            date: "2021.10.30",
            contents: "열심히 수업에 참여한 00이입니다."
        },
        {
            title: "오늘 수업시간 모습입니다.",
            date: "2021.09.20",
            contents: "열심히 수업에 참여한 00이입니다."
        },
    ]
    return (
        <>
        {post.map((post) => (
            <Post post={post}/>
        ))}
        </>
    );
}

export default PostContainer;