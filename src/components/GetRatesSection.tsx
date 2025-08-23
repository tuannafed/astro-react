import { useState } from 'react'
import Divider from './Divider'
import { iconImages } from '../constants'
import Input from './ui/Input'
import RadioGroup from './ui/RadioGroup'
import Combobox from './ui/Combobox'
import Alert from './ui/Alert'
import { CatIcon, DogIcon, FemaleIcon, MaleIcon } from './icons'

const GetRatesSection = () => {
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null)
  const [gender, setGender] = useState<'male' | 'female' | null>(null)

  return (
    <section className="bg-white pt-6 pb-16 sm:pb-25">
      <div className="max-w-1200 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-5 sm:px-[82px]">
        <div className="flex flex-col gap-9" data-aos="fade-up">
          <Divider className="mb-6 sm:mb-0" />
          <h3 className="text-xl font-semibold text-center sm:text-left">
            No Hidden Surprises—Just Straightforward Protection for{' '}
            <span className="text-primary">Your Pet’s Well-Being</span>
          </h3>

          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <img src={iconImages.cardiogramIcon.src} alt="Cardiogram" className="w-10" />
              <span>
                Coverage for <strong>unexpected injuries, emergencies, diagnosing and treatment</strong> of a wide range
                of health conditions – with no cap on sub-limits.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <img src={iconImages.stetoScopeIcon.src} alt="Stethoscope" className="w-10" />
              <span>
                Claim up to <strong>90% of approved costs</strong> for care provided by a licensed veterinary
                professional.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <img src={iconImages.plusSignIcon.src} alt="Plus" className="w-10" />
              <span>
                Include optional add-ons –{' '}
                <strong>Dental Illnesses, Behavioural Conditions, and Alternative Therapies</strong>.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-primary text-white p-6 rounded-xl space-y-6 shadow-lg" data-aos="fade-up">
          <h4 className="text-3xl text-center font-bold">Get rates for your pet</h4>
          <Alert variant="primary">Enjoy 2 months FREE when you sign up today!</Alert>
          <div className="flex flex-col gap-3">
            <Input id="pet-name" label="My pet's name is" placeholder="Enter your Pet's name" />

            <RadioGroup
              id="pet-type"
              label="My pet is a"
              value="dog"
              options={[
                { value: 'dog', label: 'Dog', icon: <DogIcon /> },
                { value: 'cat', label: 'Cat', icon: <CatIcon /> },
              ]}
              name="petType"
            />

            <RadioGroup
              id="pet-gender"
              label="My pet's gender is"
              value="male"
              options={[
                { value: 'male', label: 'Male', icon: <MaleIcon /> },
                { value: 'female', label: 'Female', icon: <FemaleIcon /> },
              ]}
              name="gender"
            />

            <Combobox
              id="pet-breed"
              label="My pet's breed is"
              placeholder="Type to search breeds..."
              options={[
                { value: 'dog', label: 'Dog' },
                { value: 'cat', label: 'Cat' },
              ]}
            />

            <Input
              id="pet-birthday"
              type="date"
              label="My pet's birthday is"
              placeholder="DD/MM/YYYY"
              className="uppercase"
            />
          </div>

          <div className="flex justify-end items-center">
            <button className="bg-[#ffad33] hover:opacity-80 transition-opacity duration-300 text-black pl-6 pr-5 py-2 font-semibold cursor-auto rounded-md text-base">
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetRatesSection
