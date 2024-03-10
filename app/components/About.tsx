import {WiSnowflakeCold} from "react-icons/wi";
import ImageGallery from "@/app/components/common/ImageGallery";
import img from '../../public/images/flame.gif'

const About = () => {

    const images = [
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp',
        '/images/person.webp'
    ];

    return (
        <div className="px-2 bg-white rounded-[30px] py-16">
            <div className="max-w-[1420px] mx-auto text-black max-[1450px]:px-12 max-[1040px]:px-3">
                <div className="flex items-center">
                    <span><WiSnowflakeCold className="text-2xl"/></span>
                    <h4 className="text-2xl">National Development Community</h4>
                </div>
                <div className="flex justify-between max-[1040px]:flex-col">
                    <p className="text-[40px] kanit-bold font-bold max-w-[700px] leading-[45px] mt-4 mb-12 max-[1040px]:mb-0 max-[1040px]:text-[32px] max-[1040px]:max-w-full">
                        Мы предлагаем создание сайта с
                        продающим wow-эффектом
                    </p>
                    <ul className="flex mt-4 gap-8 kanit-bold max-[1040px]:mb-4">
                        <li>
                            <p className="text-5xl text-[#414141] max-[1040px]:text-[#9735ff] max-[1040px]:text-[32px]">5+</p>
                            <p className="text-2xl text-[#525252] max-[1040px]:text-[14px]">Лет в cфере</p>
                        </li>
                        <li>
                            <p className="text-5xl text-[#414141] max-[1040px]:text-[#9735ff] max-[1040px]:text-[32px]">24+</p>
                            <p className="text-2xl text-[#525252] max-[1040px]:text-[14px]">Членов команды</p>
                        </li>
                        <li>
                            <p className="text-5xl text-[#414141] max-[1040px]:text-[#9735ff] max-[1040px]:text-[32px]">150+</p>
                            <p className="text-2xl text-[#525252] max-[1040px]:text-[14px]">Проектов</p>
                        </li>
                    </ul>
                </div>
                <p className="text-[18px] max-w-[850px] max-[1040px]:text-[16px]">
                    Наша команда профессионалов уделяет внимание не только дизайну и функционалу,
                    но и исследованию особенностей узбекского рынка. Мы анализируем потребительские
                    привычки, предпочтения и требования вашей целевой аудитории, чтобы создать сайт,
                    который эффективно привлекает и удерживает Ваших клиентов.
                </p>
                <p className="text-2xl text-[#525252] mb-6 mt-8 max-[1040px]:text-[14px] max-[1040px]:mt-6 max-[1040px]:mb-4">Над
                    вашим проектом будут работать</p>
                <ImageGallery images={images}/>
            </div>
        </div>
    )
}
export default About