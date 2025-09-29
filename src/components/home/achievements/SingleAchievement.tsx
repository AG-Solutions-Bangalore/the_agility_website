
const SingleAchievement = ({
  achievements,
}: {
  achievements: any
}) => {
  const { url, icon, dark_icon, sub_title, title, year } = achievements

  return (
    <a href={url} target='_blank'>
      <div className='group flex flex-col gap-11 xl:gap-16 border border-dark_black/10 p-6 2xl:p-10 rounded-2xl dark:bg-white/5'>
        <div>
          <img
            src={icon}
            alt='icon'
            height={32}
            width={32}
            className='dark:hidden'
          />
          <img
            src={dark_icon}
            alt='icon'
            height={32}
            width={32}
            className='dark:block hidden'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p>{sub_title}</p>
          <h4 className='group-hover:text-purple_blue'>{title}</h4>
        </div>
        <p>{year}</p>
      </div>
    </a>
  )
}

export default SingleAchievement