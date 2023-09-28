"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { set } from "mongoose";

const PromptCard = ({ post, handTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeOut(() => setCopied(''), 3000);
  }

  return (
    <div className="pompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image src={post.create.image} alt="user_image" width={40} height={40} className="rounded-full object-contain" />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-grey-900">
              {post.creator.name}
            </h3>
            <p className="font-inter text-sm text-grey-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? '/assests/icons/tick.svg' : '/assests/icons/copy.svg'}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-grey-700">{post.promt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </p>
    </div>
  )
}

export default PromptCard