import SpinnerIcon from "@/app/components/common/SpinnerIcon";
import Sun from '../../public/images/sun.png'
import ProjectCard from "@/app/components/common/ProjectCard";

const OurWorks = () => {
    return (
        <div className="max-w-[1420px] mx-auto px-2">
            <div className="flex items-center justify-between my-20">
                <div className="flex min-[1050px]:items-center max-[1050px]:flex-col">
                    <div>
                        <h3 className="text-[64px] kanit-bold font-semibold max-[700px]:text-[40px]">Наши работы</h3>
                        <div className="flex max-[1050px]:hidden">
                            <p className="text-[18px]">Разработка</p>
                            <p className="text-[18px] mx-6">SEO оптимизация</p>
                            <p className="text-[18px]">Брендинг</p>
                        </div>
                    </div>
                    <div className="mt-8 ml-6 max-[1050px]:hidden">
                        <SpinnerIcon img={true}/>
                    </div>
                    <p className="text-[14px] max-w-[690px] min-[1050px]:hidden max-[1050px]:text-[20px]">Бесплатная
                        концепция
                        Мы воплощаем в жизнь наших клиентов новые технологии</p>
                </div>
                <p className="text-[14px] w-[390px] max-[1050px]:hidden">Бесплатная концепция
                    Мы воплощаем в жизнь наших клиентов новые технологии</p>
                <div className="w-[300px] min-[1050px]:hidden">
                    <SpinnerIcon img={true}/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 max-[1050px]:grid-cols-1">
                <ProjectCard
                    text={'Агентсво по налоговой консультировании и бухгалтерских услуг'}
                    linkText={'www.fintax.uz'}
                    link={'www.fintax.uz'}
                    title={'FinTax'}
                    img={'/images/swiper1.webp'}
                />
                <ProjectCard
                    text={'Платформа для проведении конкурсов в сфере информационных технологий при Министерстве Инновации РУз'}
                    linkText={'www.Vorislar.uz'}
                    link={'www.Vorislar.uz'}
                    title={'Vorislar'}
                    img={'/images/swiper3.webp'}
                />
            </div>
        </div>
    )
}
export default OurWorks