function checks() {
	if (location.hostname !== 'psd.bits-pilani.ac.in') {
		alert('Only works on http://psd.bits-pilani.ac.in')
		return false
	}

	if (!location.pathname.includes('StudentStationPreference.aspx')) {
		alert('You need to be on Fill Station Prefrence page')
		return false
	}

	if (window.__PSZYSET__ === true) {
		alert('Already ran here once. Please refresh')
		return false
	}

	return true
}

function $(selector) {
	const elems = document.querySelectorAll(selector)
	return elems.length === 1 ? elems[0] : [...elems]
}

if (checks()) {

	const PSZYIcons = {
		sendToTop: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm232 424V320h87.7c17.8 0 26.7-21.5 14.1-34.1L205.7 133.7c-7.5-7.5-19.8-7.5-27.3 0L26.1 285.9C13.5 298.5 22.5 320 40.3 320H128v136c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24z"></path></svg>',
		sendToBottom: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M360 480H24c-13.3 0-24-10.7-24-24v-24c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24zM128 56v136H40.3c-17.8 0-26.7 21.5-14.1 34.1l152.2 152.2c7.5 7.5 19.8 7.5 27.3 0l152.2-152.2c12.6-12.6 3.7-34.1-14.1-34.1H256V56c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24z"></path></svg>',
		moveUp: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>',
		moveDown: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>',
		info: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>',
		scrollToTop: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path></svg>',
	}

	const styles = `
        #__PSZY_CONTROLS__ {
			flex: 0 0 auto;
            display: flex;
            justify-content: flex-end;
            align-items: center;
			order: 4;
			gap: 10px;
			height: 24px;
        }

		ul#sortable_nav>li {
			display: flex;
			gap: 15px;
            align-items: center;
		}

		ul#sortable_nav>li .sortable-number {
			flex: 0 0 auto;
			order: 1;
			margin-left: -60px;
			float: none;
		}

		ul#sortable_nav>li .uiicon {
			margin: 0px;
			order: 2;
		}

		.spacer {
			flex: 1 1 auto;
		}

		ul#sortable_nav>li .spacer {
			order: 3;
		}

		ul#sortable_nav>li input.accomo {
			flex: 0 0 auto;
			order: 5;
			float: none;
			margin: 0;
			width: 24px;
			height: 24px;
		}

        #sortable_nav>li:first-child div #__PSZY_MOVEUP__ ,
        #sortable_nav>li:first-child div #__PSZY_TOP__ ,
        #sortable_nav>li:last-child div #__PSZY_MOVEDOWN__ ,
        #sortable_nav>li:last-child div #__PSZY_BOTTOM__ {
            visibility: hidden;
        }

		#sortable_nav>li:not(:hover) #__PSZY_CONTROLS__{
			display: none;
		}

        #__PSZY_CONTROLS__ svg,
		#__PSZY_GLOBAL_CONTROLS__ svg {
			pointer-events: none;
            width: 1em;
            height: 1em;
        }

        @keyframes bg {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }

        .glow {
            animation: bg 0.4s linear;
        }
    `

	const styleTag = document.createElement('style')
	styleTag.innerHTML = styles

	window.__PSZYSET__ = true

	// disable default sorting library
	const script = document.createElement('script')
	script.innerHTML = `$('#sortable_nav').sortable('destroy'); $('#sortable_nav').enableSelection();`
	document.head.appendChild(script)

	// add styles
	document.head.appendChild(styleTag)

	// global controls
	const globalControls = `
	<div id="__PSZY_GLOBAL_CONTROLS__">
		<form class="form-horizontal">
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label">Backup</label>
				<div class="col-md-4">
					<input id="__PSZY_EXPORT__" type="button" value="Export" class="btn btn-primary">
					<input id="__PSZY_IMPORT__" type="button" value="Import" class="btn btn-inverse">
					<input id="__PSZY_FILE__" type="file" accept=".csv,text/csv" style="display: none" />
				</div>
			</div>
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label">Select Range</label>
				<div class="col-md-4">
					<input id="__PSZY_RANGE__" class="form-control" type="search" placeholder="0-10,14-18,20,25">
				</div>
				<div class="col-md-4">
					<input id="__PSZY_SELECTRANGE__" type="button" value="Select" class="btn btn-primary">
					<input id="__PSZY_DESELECTRANGE__" type="button" value="Deselect" class="btn btn-inverse">
				</div>
			</div>
			<div class="form-group">
				<label class="col-md-4 control-label">Select Pattern</label>
				<div class="col-md-4">
					<input id="__PSZY_PATTERN__" class="form-control" type="search" placeholder="IT|Bengaluru (regex)">
				</div>
				<div class="col-md-4">
					<input id="__PSZY_SELECTPATTERN__" type="button" value="Select" class="btn btn-primary">
					<input id="__PSZY_DESELECTPATTERN__" type="button" value="Deselect" class="btn btn-inverse">
				</div>
			</div>
			<div class="form-group">
				<label class="col-md-4 control-label"></label>
				<div class="col-md-4">
					<input id="__PSZY_DESELECTALL__" type="button" value="Deselect All" class="btn btn-inverse">
					<span><span id="__PSZY_SELECTEDCOUNT__" >0</span> selected</span>
				</div>
			</div>
			<hr>
			<div class="form-group">
				<label class="col-md-4 control-label">Move selected to preference#</label>
				<div class="col-md-4">
					<input id="__PSZY_PREFNO__" class="form-control" type="number" value="1" min="1">
				</div>
				<div class="col-md-4">
					<input id="__PSZY_MOVESELECTED__" type="button" value="Move" class="btn btn-primary">
					<input id="__PSZY_MOVESELECTEDTOP__" type="button" value="Top" class="btn btn-inverse">
					<input id="__PSZY_MOVESELECTEDBOTTOM__" type="button" value="Bottom" class="btn btn-inverse">
				</div>
			</div>
			<hr>
		</form>
		<div id="__PSZY_SCROLLTOTOP__" class="btn btn-primary btn-scroll-to-top" >${PSZYIcons.scrollToTop}</div>
	</div>`

	const divider = $('#rptlist > .hr.hr-dotted')
	divider.outerHTML = globalControls + divider.outerHTML

	// add controls
	const controls = `
	<div class="spacer">&nbsp;</div>
    <div id="__PSZY_CONTROLS__">
        <div id="__PSZY_MOVEUP__" class="btn btn-primary btn-toolbar" title="Move 1 up">${PSZYIcons.moveUp}</div>
        <div id="__PSZY_MOVEDOWN__" class="btn btn-primary btn-toolbar" title="Move 1 down">${PSZYIcons.moveDown}</div>
        <div id="__PSZY_TOP__" class="btn btn-primary btn-toolbar" title="Send to top">${PSZYIcons.sendToTop}</div>
        <div id="__PSZY_BOTTOM__" class="btn btn-primary btn-toolbar" title="Send to bottom">${PSZYIcons.sendToBottom}</div>
        <div id="__PSZY_SWAP__" class="btn btn-primary btn-toolbar" title="Swap">Swap</div>
        <div id="__PSZY_MOVETO__" class="btn btn-primary btn-toolbar" title="Move to">MoveTo</div>
        <div id="__PSZY_PBANK__" class="btn btn-inverse btn-toolbar" title="open problem bank">${PSZYIcons.info}</div>
    </div>`

	const lis = $('#sortable_nav > li')

	lis.forEach((li) => (li.innerHTML += controls))
	document.addEventListener('click', checkPSZYClicks, false)

	function checkPSZYClicks(e) {
		switch (e.target.id) {
			case '__PSZY_MOVEUP__':
				moveup(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVEDOWN__':
				movedown(e.target.parentNode.parentNode)
				break
			case '__PSZY_TOP__':
				movetotop(e.target.parentNode.parentNode)
				break
			case '__PSZY_BOTTOM__':
				movetobottom(e.target.parentNode.parentNode)
				break
			case '__PSZY_SWAP__':
				moveswap(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVETO__':
				moveto(e.target.parentNode.parentNode)
				break
			case '__PSZY_PBANK__':
				let stid = e.target.parentNode.parentNode.querySelector('.spanclass.uiicon').attributes.spn.value
				let fetchBody = {StationId: stid}
				fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
					"headers": {
						"content-type": "application/json; charset=UTF-8",
					},
					"referrer": "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
					"referrerPolicy": "strict-origin-when-cross-origin",
					"body": JSON.stringify(fetchBody),
					"method": "POST",
					"mode": "cors",
					"credentials": "include"
				}).then(response => response.json())
				.then(data => JSON.parse(data.d)[0])
				.then(data => window.open(`StationproblemBankDetails.aspx?CompanyId=${data.CompanyId}&StationId=${data.StationId}&BatchIdFor=${data.BatchIdFor}&PSTypeFor=${data.PSTypeFor}`, "_blank"))
				break
			case '__PSZY_EXPORT__':
				exportCsv()
				break
			case '__PSZY_IMPORT__':
				importCsv()
				break
			case '__PSZY_SELECTRANGE__':
				selectRange()
				break
			case '__PSZY_DESELECTRANGE__':
				deselectRange()
				break
			case '__PSZY_SELECTPATTERN__':
				selectPattern()
				break
			case '__PSZY_DESELECTPATTERN__':
				deselectPattern()
				break
			case '__PSZY_DESELECTALL__':
				deselectAll()
				break
			case '__PSZY_MOVESELECTED__':
				moveselectedto()
				break
			case '__PSZY_MOVESELECTEDTOP__':
				moveselectedtop()
				break
			case '__PSZY_MOVESELECTEDBOTTOM__':
				moveselectedbottom()
				break
			case '__PSZY_SCROLLTOTOP__':
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
				break
			default:
				selectNode(e.target)
				break
		}
	}

	function moveswap(node) {
		const thisPos = parseInt(node.querySelector('#spnRank').innerText)
		const otherPos = parseInt(prompt('Enter station# to swap with'), 10)
		const list = $('#sortable_nav li')
		const otherNode = list[otherPos - 1] // zero based index
		moveSelected([node], otherPos)
		moveSelected([otherNode], thisPos)
	}

	function getSelected() {
		return $('#sortable_nav').querySelectorAll('li.selected')
	}

	function getAllItems() {
		return $('#sortable_nav > li')
	}

	function moveselectedto() {
		moveSelected(getSelected(), parseInt($('#__PSZY_PREFNO__').value, 10))
	}

	function moveselectedtop() {
		moveSelected(getSelected(), 1)
	}

	function moveselectedbottom() {
		moveSelected(getSelected(), getAllItems().length)
	}

	function moveSelected(selection, to) {
		const listContainer = $('#sortable_nav')
		let list = getAllItems()
		// input validation
		if (selection.length == 0) {
			return alert('Select at least one station')
		}
		if (!Number.isInteger(to) || isNaN(to) || to < 1) {
			return alert('Enter a valid preference number')
		}
		if (to > list.length) {
			return alert('Not enough stations. Try a smaller number')
		}
		// move
		selection.forEach(node => {
			listContainer.removeChild(node)
		})
		list = getAllItems()
		if (to < list.length) {
			const targetNode = list[to - 1] // zero based index
			selection.forEach(node => {
				listContainer.insertBefore(node, targetNode)
			})
		} else {
			selection.forEach(node => {
				listContainer.appendChild(node)
			})
		}
		correctRanks()
		glow(...selection)
		deselectAll()
	}

	function selectNode(node) {
		// ignore clicks on any interactive element
		if (node.matches('input, a, button')) return
		// else (de)select the item
		node.closest('#sortable_nav > li')?.classList.toggle('selected')
		updateSelectedCount()
	}

	function deselectAll() {
		getSelected().forEach(node => node.classList.remove('selected'))
		updateSelectedCount()
	}

	function getRange() {
		const ranges = $('#__PSZY_RANGE__').value.split(',')
		const indices = []
		ranges.forEach(r => {
			r = r.trim()
			// matches numbers
			// insensitive to whitespace around number
			const singleNum = r.match(/^(\d+)$/m)
			if (singleNum !== null) {
				indices.push(parseInt(singleNum[1]))
				return
			}
			// matches: 10-22
			// insensitive to whitespace around number
			const numRange = r.match(/^(\d+)\W*-\W*(\d+)$/m)
			if (numRange !== null) {
				const min = parseInt(numRange[1])
				const max = parseInt(numRange[2])
				for (let i = min; i <= max; i++) {
					indices.push(i)
				}
				return
			}
		})
		return indices
	}

	function selectRange() {
		const list = getAllItems()
		getRange().forEach(i => {
			// zero based indexing
			list[i - 1].classList.add('selected')
		})
		updateSelectedCount()
	}

	function deselectRange() {
		const list = getAllItems()
		getRange().forEach(i => {
			// zero based indexing
			list[i - 1].classList.remove('selected')
		})
		updateSelectedCount()
	}

	function getPattern() {
		const pattern = $('#__PSZY_PATTERN__').value
		return new RegExp(pattern, 'im')
	}

	function selectPattern() {
		const list = getAllItems()
		const re = getPattern()
		list.forEach(n => {
			const text = n.querySelector('span.spanclass').innerText
			if (re.test(text)) {
				n.classList.add('selected')
			}
		})
		updateSelectedCount()
	}

	function deselectPattern() {
		const list = getAllItems()
		const re = getPattern()
		list.forEach(n => {
			const text = n.querySelector('span.spanclass').innerText
			if (re.test(text)) {
				n.classList.remove('selected')
			}
		})
		updateSelectedCount()
	}

	function updateSelectedCount() {
		const count = getSelected().length
		$('#__PSZY_SELECTEDCOUNT__').innerText = count.toString()
	}

	function moveup(node) {
		const newPos = parseInt(node.previousSibling.querySelector('#spnRank').innerText)
		moveSelected([node], newPos)
		window.scrollBy({
			top: -1 * node.offsetHeight,
			behavior: 'smooth'
		})
	}

	function movedown(node) {
		const newPos = parseInt(node.nextSibling.querySelector('#spnRank').innerText)
		moveSelected([node], newPos)
		window.scrollBy({
			top: node.offsetHeight,
			behavior: 'smooth'
		})
	}

	function movetotop(node) {
		moveSelected([node], 1)
	}

	function movetobottom(node) {
		moveSelected([node], getAllItems().length)
	}

	function moveto(node) {
		const newNodePos = parseInt(prompt('Enter preference#'), 10)
		moveSelected([node], newNodePos)
	}

	function glow(...nodes) {
		nodes.forEach((node) => {
			node.classList.add('glow')
			setTimeout(() => {
				node.classList.remove('glow')
			}, 400)
		})
	}

	function correctRanks() {
		$('#sortable_nav > li').forEach((li, index) => {
			li.querySelector('#spnRank').innerText = index + 1
			li.querySelector('span.spanclass').setAttribute('cls', index + 1)
		})
	}

	function exportCsv() {
		const list = getAllItems()
		const data = [['ID', 'NAME', 'ACCOMO']]
		list.forEach(n => {
			const a = n.querySelector('span.spanclass')
			const b = n.querySelector('input[type="checkbox"]')
			data.push([a.getAttribute('spn'), encodeURIComponent(a.innerText), Number(b.checked)])
		})
		const blob = new Blob([data.map(row => row.join(',')).join('\n')], { type: 'text/html', endings: 'native' })
		const url = URL.createObjectURL(blob)
		const anchor = document.createElement('a')
		anchor.href = url
		anchor.download = 'ps2_preferences.csv'
		document.body.appendChild(anchor)
		anchor.click()
		anchor.remove()
		URL.revokeObjectURL(url)
	}

	function importCsv() {
		const confirmed = confirm('WARNING: not tested when csv file becomes stale.\nClick OK to continue (unsafe).')
		if (!confirmed) return
		const picker = $('#__PSZY_FILE__')
		picker.click()
		picker.addEventListener('change', () => {
			picker.files?.[0]?.text().then(text => {
				const list = getAllItems()
				if (!text.startsWith('ID,NAME,ACCOMO')) return alert('Bad File')
				const data = text.trim().split('\n').map(s => s.trim().split(','))
				data.shift() // remove header
				data.forEach((r, i) => {
					const a = list[i].querySelector('span.spanclass')
					const b = list[i].querySelector('input[type="checkbox"]')
					const [id, name, accomo] = r
					const nameText = decodeURIComponent(name)
					a.setAttribute('spn', id)
					a.setAttribute('cname', nameText)
					a.innerText = nameText
					b.checked = Number(accomo)
				})
				correctRanks()
				console.log(`imported ${data.length} rows`)
			})
		})
	}
}
