import React from 'react'
import { servicesData } from "../../data/servicesData"
import ServiceCard from '../ServiceCard'

export default function Services() {
  return (
    <div className={["wrapper"].join(" ")}>
        {
            servicesData.map(el => <ServiceCard key={el.id} {...el} />)
        }
    </div>
  )
}
