import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter</title>
        <meta name="description" content="Generated by create next app" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
          App <a href="https://nextjs.org">Devter</a>
        </h1>
        <style jsx>{`
          h1 {
            text-align: center;
            font-size: 48px;
          }
          a{
            color: violet;
            padding: 20px
          }
        `}
        </style>
   

    </div>
  )
}
