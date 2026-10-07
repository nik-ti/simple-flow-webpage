// The gallery filters six local project records and preserves selection in the URL.
// Every card links to its case study.
'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { categories, kindLabel, projects, type Filter } from '@/data/projects';
import Gradient from './Gradient';
import ProjectVisual from './ProjectVisual';
import Icon from './Icon';
import styles from './Gallery.module.css';
export default function Gallery() {
  const search = useSearchParams();
  const pathname = usePathname();
  const query = search.get('category');
  const selected: Filter = categories.includes(query as Filter) ? query as Filter : 'All';
  const filtered = projects.filter(project => selected === 'All' || project.category === selected);
  function select(category: Filter) {
    const params = new URLSearchParams(search.toString());
    if (category === 'All') params.delete('category'); else params.set('category', category);
    window.history.replaceState(null, '', `${pathname}${params.size ? `?${params}` : ''}`);
  }
  return <>
    <div className={styles.toolbar}><div className={styles.filters} role="group" aria-label="Filter projects">{categories.map(category => <button key={category} onClick={() => select(category)} aria-pressed={selected === category}>{category}{category === 'All' && <span aria-hidden="true">06</span>}</button>)}</div></div>
    <div className={styles.grid}>
      {filtered.map(project => <article key={project.id} data-project-card={project.id} className={styles.card}>
        <Gradient colors={project.colors} />
        <div className={styles.cardTop}><span className={styles.category}>{kindLabel[project.category]}</span></div>
        <ProjectVisual kind={project.visual} />
        <div className={styles.cardBottom}><h2><Link aria-label={`Explore: ${project.title}`} className={styles.cardLink} href={project.href}>{project.title}<span className={styles.open}><Icon name="diagonal" size={21} /></span></Link></h2><p>{project.summary}</p></div>
      </article>)}
    </div><div className={styles.galleryFoot}><p aria-live="polite">{filtered.length} projects{selected === 'All' ? ' · A selection of our work' : ` in ${selected.toLowerCase()}`}</p><span>Built by Simple Flow.</span></div>
  </>;
}
