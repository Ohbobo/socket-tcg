export const CardTemplate = ({title, cost, img, description} : {title: string, cost: number, img: string, description: string}) => {
  return (
    <article className="w-[250px] h-[350px] border rounded-md" key={title}>
        <div className="h-[10%] flex justify-between items-center">
            <span>{title}</span>
            <span>{cost}</span>
        </div>
        <div className="border h-[80%]">
            <span>{img}</span>
            <span>{description}</span>
        </div>
        <div className="h-[10%] border">

        </div>
    </article>
  )
}
