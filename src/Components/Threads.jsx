import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";

import { CommentIcon, HeartIcon, ShareIcon } from "./Icons";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Threads({
  username,
  nickname,
  content,
  hastag,
  followersAmout,
  likesAmout,
  imageURL,
  commentsAmout,
}) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <Card className="max-w-[450px] p-2 ">
      {
        // Card Header
      }

      <CardHeader className="justify-between">
        <header className="flex gap-5">
          <Avatar isBordered color="primary" radius="full" size="md" />
          <aside className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-bold leading-none text-black dark:text-white">
              {username}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{nickname}
            </h5>
          </aside>
        </header>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onClick={() => {
            setIsFollowed(!isFollowed);

            // toast.success('follow')
          }}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>

      {
        // Card Body
      }

      <CardBody className="px-3 text-small dark:text-default-400 gap-2">
        <p className="">{content}</p>

        <Card isFooterBlurred radius="lg" className="border-none">
          
          <Image
            isZoomed
            className="w-full object-cover"
            alt="NextUI Fruit Image with Zoom"
            src={imageURL}
          />

          <CardFooter className=" justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl p-3 w-50 rounded-large bottom-1 ml-2 mb-2 shadow-small z-10">
            <p className="text-tiny text-white/80 font-bold">
              Hace: 10 horas 
            </p>
          </CardFooter>
        </Card>

        <span className="text-md font-bold text-blue-700">#{hastag}</span>
      </CardBody>

      {
        // Card Footer
      }

      <CardFooter className="gap-4 flex justify-between">
        <div className="flex gap-1 items-center">
          <HeartIcon className="w-6 dark:fill-red-600 fill-blue-600 cursor-pointer stroke-gray-300" />
          <p className="font-semibold text-default-400 text-small">
            {likesAmout}
          </p>
          <p className=" text-default-400 text-small">Cooks</p>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <CommentIcon className="w-5" />
          <p className="text-default-400 text-small">Comentar</p>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <ShareIcon className="w-5" />
          <p className="text-default-400 text-small">Compartir</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Threads;
