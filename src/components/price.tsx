import React from 'react'
import Title from './title'


const plans = [
  {
    title: "Базовый",
    description: "Подходит для небольших юридических фирм.",
    price: "₽4990/месяц",
    features: [
      "Управление клиентами",
      "Базовый документооборот",
      "Поддержка по email",
      "До 5 пользователей",
    ],
    recommended: false,
  },
  {
    title: "Профессиональный",
    description: "Для средних и крупных юридических фирм.",
    price: "₽9990/месяц",
    features: [
      "Управление клиентами",
      "Расширенный документооборот",
      "Круглосуточная поддержка",
      "До 20 пользователей",
    ],
    recommended: true,
  },
  {
    title: "Корпоративный",
    description: "Для крупных юридических компаний.",
    price: "₽14990/месяц",
    features: [
      "Управление клиентами",
      "Полный документооборот",
      "Персональный менеджер поддержки",

      "Неограниченное количество пользователей",
    ],
    recommended: false,
  },
]

const PricingPlan: React.FC<{ title: string; description: string; price: string; features: string[]; recommended: boolean }> = ({ title, description, price, features, recommended }) => {
  return (
    <div className={`p-6 rounded-lg text-center ${recommended ? 'scale-105 bg-white shadow-md' : 'scale-95'}`}>
      {recommended && <p className="text-gray-400 text-sm">Рекомендованно</p>}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <ul className="text-gray-600 mt-4 text-center">
        {features.map((feature, index) => (
          <li key={index}>- {feature}</li>
        ))}
      </ul>
      <p className="text-3xl font-bold mt-4">{price}</p>
      <button className="py-3 mt-4 bordered">Выбрать</button>
    </div>
  );
};

const Price = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {plans.map((plan, index) => (
        <PricingPlan key={index} {...plan} />
      ))}
    </div>
  )
}

export default Price