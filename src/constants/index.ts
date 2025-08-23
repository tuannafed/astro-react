// Import images properly so Astro can process them
import heroAwardsLandingImg from '../assets/images/section-hero-awards-landing.webp'
import promoFeatureImg from '../assets/images/section-promo-feature.webp'
import partnerLogoImg from '../assets/images/logo-partner.webp'
import checkIconPinkImg from '../assets/images/icon-check-pink.webp'
import checkIconGreenImg from '../assets/images/icon-check-green.webp'
import plusSignIconImg from '../assets/images/icon-plus-sign.webp'
import stetoScopeIconImg from '../assets/images/icon-steto-scope.webp'
import cardiogramIconImg from '../assets/images/icon-cardiogram.webp'
import productReviewIconImg from '../assets/images/icon-product-review.webp'
import productReviewIconLgImg from '../assets/images/icon-product-review-lg.webp'

import claimDogImg from '../assets/images/claim-dog.webp'
import claimCatImg from '../assets/images/claim-cat.webp'
import claimDog2Img from '../assets/images/claim-dog-2.webp'

import insuranceCatImg from '../assets/images/insurance-cat.webp'
import insuranceDogImg from '../assets/images/insurance-dog.webp'
import insuranceDog2Img from '../assets/images/insurance-dog-2.webp'

import discoverImg from '../assets/images/discover.webp'
import malePetImg from '../assets/images/male-pet.webp'
import dogImg from '../assets/images/dog.webp'

import whyInsureImg from '../assets/images/section-why-insure.png'

export const sectionImages = {
  heroAwardsLanding: heroAwardsLandingImg,
  promoFeature: promoFeatureImg,
  claimDog: claimDogImg,
  claimCat: claimCatImg,
  claimDog2: claimDog2Img,
  insuranceCat: insuranceCatImg,
  insuranceDog: insuranceDogImg,
  insuranceDog2: insuranceDog2Img,
  discover: discoverImg,
  malePet: malePetImg,
  dog: dogImg,
  whyInsure: whyInsureImg,
}

export const logoImages = {
  partnerLogo: partnerLogoImg,
}

export const iconImages = {
  checkIconPink: checkIconPinkImg,
  checkIconGreen: checkIconGreenImg,
  plusSignIcon: plusSignIconImg,
  stetoScopeIcon: stetoScopeIconImg,
  cardiogramIcon: cardiogramIconImg,
  productReviewIcon: productReviewIconImg,
  productReviewLgIcon: productReviewIconLgImg,
}

export const allImages = {
  ...sectionImages,
  ...logoImages,
  ...iconImages,
}
