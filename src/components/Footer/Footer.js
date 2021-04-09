import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      Developed by{' '}
      <a className={s.link} href="https://github.com/Mr-Serzh" target="_blank">
        Serhii Hayvoronskyi
      </a>
    </footer>
  );
}
