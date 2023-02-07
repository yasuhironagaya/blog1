/* test.tsx */


function EachPost(props:any) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>
  );
}


export default function Posts(){
  const props1:object = {title:'記事のタイトル', url:"https://kokoroyasuku.com"}
  const {url,title}=props1
  console.log(url)
  console.log(title)
  return (
    <section>
      <h2>おすすめ記事</h2>
      <EachPost {...props1} />
    </section>
  )
}
