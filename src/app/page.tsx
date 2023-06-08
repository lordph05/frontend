import Image from 'next/image'
import styles from '../styles/page.module.scss'

import logoImg from '../../public/logo.svg'
import {Input} from '../components/ui/input'
import {Button} from '../components/ui/Button'


export default function Home() {
  return (
    <>
    <div className={styles.containerCenter}>
<Image src={logoImg} alt='logo Sujeito Pizzaria'/>

<div className={styles.login}>
  <form>
    <Input placeholder='Digite seu email'
    type='text'
    />

    <Input placeholder='Digite sua senha'
    type='password'
    />

    <Button
type = "submit"
Loading = {false}
>
  Acessar
    </Button>
  </form>
  <a className={styles.text}>Nao possui uma conta Cadastre-se</a>

</div>
    </div>

    </>
  )
}
