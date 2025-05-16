
import { useTranslation } from 'react-i18next';
import CategorySlider from '../components/CategorySlider'

export default function CategorySection() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto flex flex-col gap-5 py-10">
        <div>
          <h1 className="max-md:text-[30px] text-[50px] font-extrabold text-primary ">{t('ExploreCategories.heading')}</h1>
        </div>
        <div className="py-10 border-b-2"> 
          <CategorySlider/>
        </div>
      </section>
  )
}
