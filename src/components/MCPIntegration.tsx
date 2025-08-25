import { useState } from 'react'

interface FormData {
  petName: string
  petType: string
  petAge: string
  breed: string
  email: string
  phone: string
  zipCode: string
  coverageType: string
  additionalInfo: string
}

interface CallbackFormData {
  name: string
  phone: string
  bestTime: string
  message: string
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    petName: '',
    petType: 'dog',
    petAge: '',
    breed: '',
    email: '',
    phone: '',
    zipCode: '',
    coverageType: 'basic',
    additionalInfo: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate MCP server integration
      const mcpResponse = await simulateMCPServerCall(formData)

      setSubmitStatus('success')
      setFormData({
        petName: '',
        petType: 'dog',
        petAge: '',
        breed: '',
        email: '',
        phone: '',
        zipCode: '',
        coverageType: 'basic',
        additionalInfo: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const simulateMCPServerCall = async (data: FormData) => {
    // Simulate MCP server communication
    return {
      success: true,
      quoteId: `QUOTE-${Date.now()}`,
      estimatedPremium: Math.floor(Math.random() * 100) + 20,
      coverageDetails: {
        accident: true,
        illness: true,
        wellness: data.coverageType === 'premium',
      },
      timestamp: new Date().toISOString(),
    }
  }

  const getButtonClasses = () => {
    return submitStatus === 'success'
      ? 'bg-success hover:bg-secondary-600'
      : submitStatus === 'error'
        ? 'bg-red-500 hover:bg-red-600'
        : 'bg-primary-500 hover:bg-primary-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-center text-dark mb-6">Get Your 2-Minute Quote</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet&apos;s Name</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter pet's name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type</label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet&apos;s Age</label>
          <input
            type="text"
            name="petAge"
            value={formData.petAge}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g., 3 years"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="e.g., Golden Retriever"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter zip code"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Coverage Type</label>
          <select
            name="coverageType"
            value={formData.coverageType}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="basic">Basic Coverage</option>
            <option value="standard">Standard Coverage</option>
            <option value="premium">Premium Coverage</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Any special requirements or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 ${getButtonClasses()} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting
            ? 'Getting Your Quote...'
            : submitStatus === 'success'
              ? 'Quote Generated!'
              : submitStatus === 'error'
                ? 'Try Again'
                : 'Get Free Quote'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-center text-success text-sm">
            ✓ Your quote has been generated! Check your email for details.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center text-red-500 text-sm">✗ Something went wrong. Please try again.</div>
        )}
      </form>
    </div>
  )
}

export function CallbackForm() {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    bestTime: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate MCP server integration
      const mcpResponse = await simulateMCPServerCall(formData)

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        bestTime: '',
        message: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const simulateMCPServerCall = async (data: CallbackFormData) => {
    // Simulate MCP server communication
    return {
      success: true,
      callbackId: `CALLBACK-${Date.now()}`,
      scheduledTime: data.bestTime,
      agentNotes: data.message,
      timestamp: new Date().toISOString(),
    }
  }

  const getButtonClasses = () => {
    return submitStatus === 'success'
      ? 'bg-success hover:bg-secondary-600'
      : submitStatus === 'error'
        ? 'bg-red-500 hover:bg-red-600'
        : 'bg-primary-500 hover:bg-primary-600'
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-center text-dark mb-6">Request a Callback</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Best Time to Call</label>
          <select
            name="bestTime"
            value={formData.bestTime}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select best time</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="evening">Evening (5 PM - 8 PM)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Any specific questions or concerns..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 ${getButtonClasses()} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting
            ? 'Scheduling Callback...'
            : submitStatus === 'success'
              ? 'Callback Scheduled!'
              : submitStatus === 'error'
                ? 'Try Again'
                : 'Schedule Callback'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-center text-success text-sm">
            ✓ Your callback has been scheduled! We&apos;ll call you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center text-red-500 text-sm">✗ Something went wrong. Please try again.</div>
        )}
      </form>
    </div>
  )
}
