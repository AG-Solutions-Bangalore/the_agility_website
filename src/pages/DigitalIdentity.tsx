
import { useEffect } from 'react'
import { Mail, Phone, MessageCircle, Download, MapPin, Globe, Briefcase, ArrowRight } from 'lucide-react'

const DigitalIdentity = () => {
  useEffect(() => {
    document.title = `Mr. Govind Garg Digital Business Card`
  }, [])

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Mr. Govind Garg
TITLE:Chief Executive Officer
ORG:THE AGILITY
EMAIL:info@theagility.in
TEL:+918867171061
TEL;TYPE=WHATSAPP:+918867171061
ADR:;;Jaynagara, Bengaluru
URL:https://theagility.in
END:VCARD`
    
    const blob = new Blob([vCard], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = 'govind-garg.vcf'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className='relative max-w-xl mx-auto  flex items-center justify-center p-4 before:content-[""] before:absolute  before:bg-gradient-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl  before:-z-10'>
 
      


      <div className='w-full '>
        {/* Main Card */}
        <div className='bg-white/80 backdrop-blur-sm rounded-md border border-white/20  overflow-hidden'>
          
          {/* Header Banner */}
          <div className='relative h-16 sm:h-20 border-t bg-gradient-to-r from-yellow-50/20 via-orange-100/40 to-yellow-50/20'>
            <div className='absolute top-4 left-1/2 -translate-x-1/2'>
              <img
                src="/images/logo/logo1.png"
                alt="The Agility"
                className='h-auto w-auto scale-125'
              />
            </div>
          </div>
          
          {/* Content */}
          <div className='mt-1'>
            
            {/* Profile Section */}
            <div className='flex flex-row gap-4  mb-2'>
              
              {/* Profile Image */}
              <div className='flex justify-center md:justify-start'>
                <div className=' '>
                  <div className=''>
                    <img
                      src="https://cdn.hihello.me/v/ac1c9eee-fc07-49b5-baf9-951348acb914.png-large-preserve-ratio"
                      alt="Mr. Govind Garg"
                      className='w-[8rem] h-[8rem]  rounded-full object-cover border-2 border-white shadow-lg'
                    />
                    {/* Status Indicator */}
                    
                  </div>
                </div>
              </div>

              {/* Name & Info */}
              <div className='flex-1 flex flex-col justify-center md:justify-start md:pl-2'>
  <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
    <div>
      <h1 className='text-xl md:text-2xl font-bold text-gray-900'>
        Mr. Govind Garg
      </h1>
      <p className='text-sm md:text-base font-semibold text-purple-600'>
        Chief Executive Officer
      </p>
    </div>
  
  </div>

  <div className='flex flex-col gap-3 mt-2 text-sm text-gray-600'>
    <div className='flex items-center gap-1'>
      <MapPin className='w-4 h-4 text-purple-500' />
      <span>Jaynagara, Bengaluru</span>
    </div>
    <div className='flex items-center gap-1'>
      <Briefcase className='w-4 h-4 text-blue-500' />
      <span>Business Solutions</span>
    </div>
  </div>
</div>

            </div>

            {/* Divider */}
            <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6'></div>

            {/* Contact Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-6'>
              
              {/* Email */}
              <a 
                href="mailto:info@theagility.in"
                className='flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 group'
              >
                <div className='p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <Mail className='w-4 h-4 text-white' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-xs text-gray-500 font-medium'>Email</p>
                  <p className='text-sm text-gray-800 font-medium truncate'>info@theagility.in</p>
                </div>
                <div className='p-2  rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <ArrowRight className='w-4 h-4 text-purple-600' />
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+918867171060"
                className='flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group'
              >
                <div className='p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <Phone className='w-4 h-4 text-white' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-xs text-gray-500 font-medium'>Phone</p>
                  <p className='text-sm text-gray-800 font-medium'>+91 88671 71061</p>
                </div>
                <div className='p-2  rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <ArrowRight className='w-4 h-4 text-blue-600' />
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/918867171061"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 group'
              >
                <div className='p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <MessageCircle className='w-4 h-4 text-white' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-xs text-gray-500 font-medium'>WhatsApp</p>
                  <p className='text-sm text-gray-800 font-medium'>+91 88671 71061</p>
                </div>
                <div className='p-2  rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <ArrowRight className='w-4 h-4 text-green-600' />
                </div>
              </a>

              {/* Website */}
              <a 
                href="https://theagility.in"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 group'
              >
                <div className='p-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <Globe className='w-4 h-4 text-white' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-xs text-gray-500 font-medium'>Website</p>
                  <p className='text-sm text-gray-800 font-medium'>www.theagility.in</p>
                </div>
                <div className='p-2  rounded-lg group-hover:scale-110 transition-transform duration-200'>
                  <ArrowRight className='w-4 h-4 text-slate-600' />
                </div>
              </a>
            </div>

            {/* Save Contact Button */}
            <button
              onClick={handleSaveContact}
              className='w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-yellow-800 to-orange-700 hover:from-orange-700 hover:to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]'
            >
              <Download className='w-5 h-5' />
              Save Contact
            </button>

            {/* Footer Info */}
            <div className='mt-2 pt-4 border-t border-gray-200/50'>
              <p className='text-center text-xs text-gray-500 font-medium'>
                Transforming businesses with innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalIdentity
