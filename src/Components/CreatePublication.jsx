// Componets
import { Avatar } from "@nextui-org/react";


function CreatePublication() {
  return (
    <article className=" block w-full px-4 max-w-[750px]">
      <div className="flex gap-4 justify-between items-center bg-white dark:bg-zinc-900 py-4 px-6 rounded-md basis-[100%] ">
        <Avatar
          isBordered
          color="primary"
          src="https://www.los40.do/wp-content/uploads/2023/10/16880295953133-e1696339269651-300x300.jpeg" />

        <input 
          type="text"
          placeholder="Search..."
          className=" w-full py-3 px-4 rounded-xl focus:outline-none bg-slate-200 dark:bg-zinc-800" />

      </div>
    </article>
  )
}

export default CreatePublication;
