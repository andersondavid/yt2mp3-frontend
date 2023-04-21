function createFileName(videoTitle: string) {
	const removeEspecialChar = videoTitle.replace(/\s+/g, '_')
	const shortenNname = removeEspecialChar.substring(0, 20)
	const newName = shortenNname + '.mp3'

	return newName
}

export default createFileName