import styles from './Hero.module.css';

export default function Hero() {
    return (
        <header className={styles.hero}>
            <p className={styles.eyebrow}>Software Engineer · Backend &amp; Cloud</p>

            <h1 className={styles.statement}>
                I build systems<br />
                that hold up<br />
                under pressure.
            </h1>

            <p className={styles.lede}>
                Distributed backends, multi-tenant data, and the infrastructure that keeps them honest. 
            </p>

            <div className={styles.ctaRow}>
                <a className={styles.btnSolid} href="projects">See selected projects</a>
            </div>
        </header>
    );
}