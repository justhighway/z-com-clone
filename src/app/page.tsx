import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function LoginPage() {
  return (
    <>
      {/* <div>
        <Image src={zLogo} alt='Logo'/>
      </div> */}
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href='/i/flow/signup'>계정 만들기</Link>
        <Link href='/login'>로그인</Link>
      </div>
    </>
  )
}
