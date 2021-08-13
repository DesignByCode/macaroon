import React from 'react'
import CodeEditor from '../components/CodeEditor'

const Home = () => {
  return (
    <div className="wrapper">
      <div className="row py-9">
        <div className="md-col-12">
          <div className="bg--red p-4 flex flex--align-center txt--red-100">
            <span className="font--size-xxl mr-3">⛑</span>
            <strong>IN DEVELOPMENT</strong>
          </div>
        </div>
        <div className="md-col-12">
          <h1 className={`font--size-hey font--weight-900 m-0 mb-2 txt--purple`}>
            Macaroon<small className="font--size-xl font--weight-200">.css</small>
          </h1>
          <h2 className={`font--size-xl font--weight-200 m-0 txt--gray-700`}>Build with new sass features.</h2>
          <h3 className={`font--size-lg font--weight-400 txt--purple-400 m-0 mb-5`}>
            Macaroon is a experimental css framework using the latest sass features. 🎉
          </h3>
          <div className="border--red bg--gray-50 border--dashed font--weight-bold txt--gray my-6 p-5">
            ⚡ Currently only works with sass-dart!
          </div>
          <div>
            <a href="#" className="btn btn--xs btn--purple btn--purple-600:hover">
              extra small
            </a>
            <a href="#" className="btn btn--sm btn--purple btn--purple-600:hover">
              small
            </a>
            <a href="#" className="btn btn--purple btn--purple-600:hover">
              normal
            </a>
            <a href="#" className="btn btn--purple btn--purple-600:hover">
              Button hover
            </a>
            <a href="#" className="btn btn--lg btn--purple focus--purple btn--purple-600:hover">
              large
            </a>
            <a href="#" className="btn btn--xl btn--purple btn--purple-600:hover">
              extra large
            </a>
          </div>
        </div>
        <div className="md-col-12">
          <CodeEditor>npm i macaroon.css</CodeEditor>
        </div>

        <div className="form__group">
          <label htmlFor="name" className="form__label">
            NAME:
          </label>
          <input type="text" id="name" className="form__item focus--gray-200" />
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            EMAIL:
          </label>
          <input type="text" id="email" className="form__item  focus--blue-50" />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            PASSWORD:
          </label>
          <div className="form__wrap">
            <input type="text" id="password" className="form__item focus--pink-50" />
            <button className="btn btn--purple">Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
