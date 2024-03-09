import {useState} from "react";

const SiteType = () => {
    const [type, setType] = useState(0)
    return (
        <div>
            <p className="mt-6 mb-4">Выберите тип сайта</p>
            <div className="flex flex-wrap gap-2 max-w-[750px] max-[850px]:text-[14px]">
                <div onClick={() => setType(1)} className={`${type == 1 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>Веб-сайт</div>
                <div onClick={() => setType(2)} className={`${type == 2 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>Корпоративный сайт</div>
                <div onClick={() => setType(3)} className={`${type == 3 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>CRM-система</div>
                <div onClick={() => setType(4)} className={`${type == 4 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>Мобильное приложение</div>
                <div onClick={() => setType(5)} className={`${type == 5 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>Лендинг сайт</div>
                <div onClick={() => setType(6)} className={`${type == 6 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>Интернет магазин</div>
                <div onClick={() => setType(7)} className={`${type == 7 ? "bg-[#a050e2] boxShadow" : "bg-[#525252]"} py-[12px] px-[24px] cursor-pointer rounded-full`}>Другое</div>
            </div>
        </div>
    )
}
export default SiteType