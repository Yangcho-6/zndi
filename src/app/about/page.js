import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>나의 포부와 비전</h1>
      
      <p className={styles.intro}>
        안녕하세요! **ZANDI** 블로그에 오신 것을 환영합니다. 
        이 곳은 단순한 기술 기록장을 넘어, 끊임없이 성장하고 새로운 가치를 만들어내려는 
        저의 여정을 담는 공간입니다. '잔디'가 매일 조금씩 자라나 넓은 벌판을 이루듯, 
        저 또한 매일의 배움을 통해 더 큰 미래를 그려나가고 있습니다.
      </p>

      <section className={styles.section}>
        <h2>🌱 핵심 가치</h2>
        <div className={styles.cardGrid}>
          <div className={`${styles.card} glass`}>
            <h3>지속 가능한 성장</h3>
            <p>반짝하고 사라지는 지식이 아닌, 뿌리가 단단한 실력을 쌓기 위해 매일 '잔디'를 심습니다.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <h3>공유의 즐거움</h3>
            <p>혼자 아는 지식보다 함께 나눌 때 그 가치가 배가 된다는 믿음으로 기록합니다.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <h3>기술적 깊이</h3>
            <p>도구의 사용법을 넘어, 그 이면에 담긴 원리와 철학을 깊이 있게 탐구합니다.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <h3>사용자 중심</h3>
            <p>기술은 결국 사람을 향해야 한다는 마음으로, 더 나은 경험을 고민합니다.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>🚀 앞으로의 포부</h2>
        <div className={styles.intro}>
          <p>
            단기적으로는 이 블로그를 통해 저만의 기술 스택을 공고히 하고, 
            다양한 프로젝트의 시행착오를 가감 없이 기록하여 누군가에게 도움이 되는 
            이정표를 만드는 것이 목표입니다.
          </p>
          <br />
          <p>
            장기적으로는 복잡한 문제를 단순하고 우아하게 해결하는 엔지니어가 되어, 
            세상에 긍정적인 임팩트를 줄 수 있는 서비스를 직접 설계하고 운영하고 싶습니다. 
            기술이 세상의 장벽을 낮추고 사람들의 삶을 풍요롭게 만드는 과정에 
            언제나 '잔디'처럼 함께하겠습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
