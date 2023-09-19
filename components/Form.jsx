import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Create</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and Share amazing prompts with the world, let your imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-grey-700'>
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(event) => setPost({ ...post, prompt: event.target.value })}
            placeholder='Write your prompt here...'
            className='form_textarea'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-grey-700'>
            Tag
          </span>
          <textarea
            value={post.tag}
            onChange={(event) => setPost({ ...post, tag: event.target.value })}
            placeholder='#product, #webdevelopment, #idea)'
            className='form_input'
            required
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-grey-500 text-sm'>Cancel</Link>
        </div>
        <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
          {submitting ? `${type}...` : type}
        </button>
      </form>
    </section>
  )
}

export default Form