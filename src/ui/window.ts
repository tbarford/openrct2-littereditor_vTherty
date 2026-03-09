
import { debug } from "../helpers/logger";
import { isDevelopment, pluginVersion } from "../helpers/environment";
import { getTileElements } from "../helpers/Z-Coords";
import { litterCount, totalLitterCount } from "../helpers/litterStats";

// Settings for the window
export const windowId = "litter-editor-window";

const windowColour = 12;
const widgetLineHeight = 14;
const buttonPipette: string = "litter-editor-button-pipette";
const toolSelectLitter: string = "litter-editor-tool-select-litter";
const litterTypeDropDown: string = "litter-editor-litter-type-drop-down";
const litterTypeLabel: string = "litter-editor-litter-type-label";
const buttonDelete: string = "litter-editor-button-delete";
const toolRemoveLitter: string = "litter-editor-tool-remove-litter";
const xPositionLabel: string = "litter-editor-x-position-label";
const yPositionLabel: string = "litter-editor-y-position-label";
const zPositionLabel: string = "litter-editor-z-position-label";
const xPositionSpinner: string = "litter-editor-x-position-spinner";
const yPositionSpinner: string = "litter-editor-y-position-spinner";
const zPositionSpinner: string = "litter-editor-z-position-spinner";
const litterViewport: string = "litter-editor-litter-viewport";
const multiplierDropdown: string = "litter-editor-multiplier-drop-down";
const buttonCreateLitter: string = "litter-editor-button-create-litter";
const multiplierIndex: string[] = ["x1", "x10", "x100"];
const multiplierLabel: string = "litter-editor-multiplier-label";
const toolCreateLitter: string = "litter-editor-tool-create-litter";

// Track Distributor tab widget names
const trackDistRideDropdown: string   = "litter-editor-track-dist-ride-dropdown";
const trackDistRideLabel: string      = "litter-editor-track-dist-ride-label";
const trackDistCountSpinner: string   = "litter-editor-track-dist-count-spinner";
const trackDistCountLabel: string     = "litter-editor-track-dist-count-label";
const trackDistLitterDropdown: string = "litter-editor-track-dist-litter-dropdown";
const trackDistLitterLabel: string    = "litter-editor-track-dist-litter-label";
const trackDistOffsetSpinner: string  = "litter-editor-track-dist-offset-spinner";
const trackDistOffsetLabel: string    = "litter-editor-track-dist-offset-label";
const trackDistButton: string         = "litter-editor-track-dist-button";

let idLitter: Litter;
let multiplier: number = 1;
let selectedLitterType: LitterType = "vomit";

// Track Distributor tab state
let trackDistRideItems: string[] = [];
let trackDistRideIds: number[] = [];
let trackDistSelectedRideIdx: number = 0;
let trackDistCount: number = 4;
let trackDistLitterType: LitterType = "vomit";
let trackDistZOffset: number = 0;

export class LitterEditorWindow {
	/**
	 * Opens the window for the Litter Editor.
	 */

	open(): void {
		const window = ui.getWindow(windowId);
		if (window) {
			debug("The Litter Editor window is already shown.");
			window.bringToFront();
		}
		else {
			let windowTitle = `Litter Editor (v${pluginVersion})`;
			if (isDevelopment) {
				windowTitle += " [DEBUG]";
			}
			// Populate ride list at window-open time (snapshot; stale list is expected/normal)
			trackDistRideItems = [];
			trackDistRideIds = [];
			const rides = map.rides;
			for (let i = 0; i < rides.length; i++) {
				const ride = rides[i];
				trackDistRideItems.push(ride.id + ": " + ride.name);
				trackDistRideIds.push(ride.id);
			}
			trackDistSelectedRideIdx = 0;
			trackDistCount = 4;
			trackDistLitterType = "vomit";
			trackDistZOffset = 0;
			ui.openWindow({
				onClose: () => {
					ui.tool?.cancel();
				},
				classification: windowId,
				title: windowTitle,
				width: 260,
				height: 250,
				colours: [windowColour, windowColour],
				tabs: [
					{
						image: 5478, //litter bin
						widgets: [
							<LabelWidget>{
								type: "label",
								x: 0,
								y: 232,
								width: 260,
								height: widgetLineHeight,
								textAlign: "centred",
								text: "github.com/EnoxRCT/OpenRCT2-LitterEditor",
								tooltip: "Powered by Manticore_007 and Basssiiie",
								isDisabled: true,
							},
							<GroupBoxWidget>{
								type: "groupbox",
								x: 10,
								y: 55,
								width: 240,
								height: 170,
								text: "Litter",
							},
							<ButtonDesc>{
								name: buttonPipette,
								type: "button",
								border: true,
								tooltip: "Select litter",
								x: 20,
								y: 75,
								width:25,
								height: 25,
								image: 29402, //pipette
								isPressed: false,
								onClick: () => selectLitter("litter")				
							},
							<ButtonDesc>{
								name: buttonDelete,
								type: "button",
								border: true,
								tooltip: "Remove litter",
								x: 80,
								y: 75,
								width: 25,
								height: 25,
								image: 5165, //litter bin
								isPressed: false,
								onClick: () => removeLitter("litter")
							},
							<ButtonDesc>{
								name: buttonCreateLitter,
								type: "button",
								border: true,
								tooltip: "Place litter",
								x: 50,
								y: 75,
								width: 25,
								height: 25,
								image: 5173, //paint brush
								isPressed: false,
								onClick: () => createLitter("litter")
							},
							<LabelWidget>{
								name: litterTypeLabel,
								type: "label",
								x: 20,
								y: 110,
								width: 75,
								height: widgetLineHeight,
								text: "Litter Type",
								isDisabled: true,
							},
							<DropdownDesc>{
								name: litterTypeDropDown,
								type: "dropdown",
								x: 90,
								y: 110,
								width: 125,
								height: widgetLineHeight,
								items: [
									"Vomit",				//0
									"Vomit Alt",			//1
									"Empty Can",			//2
									"Rubbish",				//3
									"Burger Box",			//4
									"Empty Cup",			//5
									"Empty Box",			//6
									"Empty Bottle",			//7
									"Empty Bowl Red",		//8
									"Empty Drink Carton",	//9
									"Empty Juice Cup",		//10
									"Empty Bowl Blue"		//11
								],
								selectedIndex: -1,
								isDisabled: true,
								onChange: (number) => setLitter(number)
							},
							
							<LabelWidget>{
								name: xPositionLabel,
								type: "label",
								x: 20,
								y: 135,
								width: 125,
								height: widgetLineHeight,
								text: "X-Position",
								isDisabled: true,
							},
							<SpinnerDesc>{
								name: xPositionSpinner,
								type: "spinner",
								x: 90,
								y: 135,
								width: 70,
								height: widgetLineHeight,
								text: " ",
								isDisabled: true,
								onIncrement: () => increase(xPositionSpinner, "x"),
								onDecrement: () => decrease(xPositionSpinner, "x"),
							},
							<LabelWidget>{
								name: yPositionLabel,
								type: "label",
								x: 20,
								y: 153,
								width: 125,
								height: widgetLineHeight,
								text: "Y-Position",
								isDisabled: true,
							},
							<SpinnerDesc>{
								name: yPositionSpinner,
								type: "spinner",
								x: 90,
								y: 153,
								width: 70,
								height: widgetLineHeight,
								text: " ",
								isDisabled: true,
								onIncrement: () => increase(yPositionSpinner, "y"),
								onDecrement: () => decrease(yPositionSpinner, "y"),
							},
							<LabelWidget>{
								name: zPositionLabel,
								type: "label",
								x: 20,
								y: 171,
								width: 125,
								height: widgetLineHeight,
								text: "Z-Position",
								isDisabled: true,
							},
							<SpinnerDesc>{
								name: zPositionSpinner,
								type: "spinner",
								x: 90,
								y: 171,
								width: 70,
								height: widgetLineHeight,
								text: " ",
								isDisabled: true,
								onIncrement: () => increase(zPositionSpinner, "z"),
								onDecrement: () => decrease(zPositionSpinner, "z"),
							},
							<LabelWidget>{
								name: multiplierLabel,
								type: "label",
								x: 20,
								y: 196,
								width: 125,
								height: widgetLineHeight,
								text: "Multiplier",
								isDisabled: true,
							},
							<DropdownDesc>{
								name: multiplierDropdown,
								type: "dropdown",
								x: 90,
								y: 196,
								width: 70,
								height: widgetLineHeight,
								items: multiplierIndex,
								selectedIndex: 0,
								isDisabled: true,
								onChange: (number) => setMultiplier(number)
							},
							<ViewportDesc>{
								name: litterViewport,
								type: "viewport",
								x: 165,
								y: 135,
								width: 75,
								height: 75,
							}
						],
					},
					{
						image: {
							frameBase: 5391, //stats
							frameCount: 16,
							frameDuration: 4,
						},
						widgets: [
							<LabelDesc>{
								type: "label",
								x: 0,
								y: 232,
								width: 260,
								height: widgetLineHeight,
								textAlign: "centred",
								text: "github.com/EnoxRCT/OpenRCT2-LitterEditor",
								tooltip: "Powered by Manticore_007 and Basssiiie",
								isDisabled: true,
							},
							<GroupBoxDesc>{
								type: "groupbox",
								x: 10,
								y: 55,
								width: 240,
								height: 170,
								text: "Statistics",
							},
							//1st column
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 80,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(23101); //vomit
									if (img)
									{
										g.image(img.id, 7, 7);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 40,
								y: 80,
								width: 110,
								height: widgetLineHeight,
								text: `Vomit: {WHITE}${litterCount("vomit")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 95,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(23104); //vomit alt
									if (img)
									{
										g.image(img.id, 7, 7);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 40,
								y: 95,
								width: 110,
								height: widgetLineHeight,
								text: `Vomit Alt: {WHITE}${litterCount("vomit_alt")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 110,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5071); //empty can
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 40,
								y: 110,
								width: 110,
								height: widgetLineHeight,
								text: `Empty Can: {WHITE}${litterCount("empty_can")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 125,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5072); //rubbish
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 40,
								y: 125,
								width: 110,
								height: widgetLineHeight,
								text: `Rubbish: {WHITE}${litterCount("rubbish")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 140,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5073); //burger box
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelWidget>{
								type: "label",
								x: 40,
								y: 140,
								width: 110,
								height: widgetLineHeight,
								text: `Burger Box: {WHITE}${litterCount("burger_box")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 155,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5084); //empty cup
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelWidget>{
								type: "label",
								x: 40,
								y: 155,
								width: 110,
								height: widgetLineHeight,
								text: `Empty Cup: {WHITE}${litterCount("empty_cup")}`,
							},
							//2nd column
							<CustomDesc>{
								type: "custom",
								x: 130,
								y: 80,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5087); //empty box
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 150,
								y: 80,
								width: 110,
								height: widgetLineHeight,
								text: `Empty Box: {WHITE}${litterCount("empty_box")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 130,
								y: 95,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5088); //empty bottle
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 150,
								y: 95,
								width: 110,
								height: widgetLineHeight,
								text: `Empty Bottle: {WHITE}${litterCount("empty_bottle")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 130,
								y: 110,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5106); //empty bowl red
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 150,
								y: 110,
								width: 110,
								height: widgetLineHeight,
								text: `Bowl Red: {WHITE}${litterCount("empty_bowl_red")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 130,
								y: 125,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5107); //empty drink carton
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelDesc>{
								type: "label",
								x: 150,
								y: 125,
								width: 110,
								height: widgetLineHeight,
								text: `Drink Carton: {WHITE}${litterCount("empty_drink_carton")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 130,
								y: 140,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5108); //empty juice cup
									if (img)
									{
										g.tertiaryColour = 18;
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelWidget>{
								type: "label",
								x: 150,
								y: 140,
								width: 110,
								height: widgetLineHeight,
								text: `Juice Cup: {WHITE}${litterCount("empty_juice_cup")}`,
							},
							<CustomDesc>{
								type: "custom",
								x: 130,
								y: 155,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5110); //empty bowl blue
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelWidget>{
								type: "label",
								x: 150,
								y: 155,
								width: 110,
								height: widgetLineHeight,
								text: `Bowl Blue: {WHITE}${litterCount("empty_bowl_blue")}`,
							},
							//Total litter
							<CustomDesc>{
								type: "custom",
								x: 20,
								y: 190,
								width: 14,
								height: 14,
								onDraw: function (g) {
									const img = g.getImage(5115); //check list
									if (img)
									{
										g.image(img.id, 0, 0);
									}
								}
							},
							<LabelWidget>{
								type: "label",
								x: 40,
								y: 190,
								width: 200,
								height: widgetLineHeight,
								text: `Total amount of litter: {WHITE}${totalLitterCount()}`,
							},
						],
					},
					{
						image: 5193, // TODO: verify track/ride icon ID in-game; try 29367 if incorrect
						widgets: [
							// Footer label — matches pattern on all other tabs
							<LabelWidget>{
								type: "label",
								x: 0, y: 232, width: 260, height: widgetLineHeight,
								textAlign: "centred",
								text: "github.com/EnoxRCT/OpenRCT2-LitterEditor",
								tooltip: "Powered by Manticore_007 and Basssiiie",
								isDisabled: true,
							},
							// Groupbox
							<GroupBoxWidget>{
								type: "groupbox",
								x: 10, y: 55, width: 240, height: 170,
								text: "Track Distributor",
							},
							// Row 1: Ride selector
							<LabelWidget>{
								name: trackDistRideLabel,
								type: "label",
								x: 20, y: 72, width: 65, height: widgetLineHeight,
								text: "Ride",
							},
							<DropdownDesc>{
								name: trackDistRideDropdown,
								type: "dropdown",
								x: 90, y: 72, width: 150, height: widgetLineHeight,
								items: trackDistRideItems.length > 0 ? trackDistRideItems : ["(no rides)"],
								selectedIndex: 0,
								onChange: (index: number) => onTrackDistRideChanged(index),
							},
							// Row 2: Number of litter spinner (1–8, default 4)
							<LabelWidget>{
								name: trackDistCountLabel,
								type: "label",
								x: 20, y: 92, width: 65, height: widgetLineHeight,
								text: "Num. Litter",
							},
							<SpinnerDesc>{
								name: trackDistCountSpinner,
								type: "spinner",
								x: 90, y: 92, width: 70, height: widgetLineHeight,
								text: "4",
								onIncrement: () => onTrackDistCountChange(1),
								onDecrement: () => onTrackDistCountChange(-1),
							},
							// Row 3: Litter type dropdown
							<LabelWidget>{
								name: trackDistLitterLabel,
								type: "label",
								x: 20, y: 112, width: 65, height: widgetLineHeight,
								text: "Litter Type",
							},
							<DropdownDesc>{
								name: trackDistLitterDropdown,
								type: "dropdown",
								x: 90, y: 112, width: 150, height: widgetLineHeight,
								items: [
									"Vomit",              // 0
									"Vomit Alt",          // 1
									"Empty Can",          // 2
									"Rubbish",            // 3
									"Burger Box",         // 4
									"Empty Cup",          // 5
									"Empty Box",          // 6
									"Empty Bottle",       // 7
									"Empty Bowl Red",     // 8
									"Empty Drink Carton", // 9
									"Empty Juice Cup",    // 10
									"Empty Bowl Blue"     // 11
								],
								selectedIndex: 0,
								onChange: (index: number) => onTrackDistLitterTypeChanged(index),
							},
							// Row 4: Track Z offset spinner (-8 to +8, default 0)
							<LabelWidget>{
								name: trackDistOffsetLabel,
								type: "label",
								x: 20, y: 132, width: 65, height: widgetLineHeight,
								text: "Z Offset",
							},
							<SpinnerDesc>{
								name: trackDistOffsetSpinner,
								type: "spinner",
								x: 90, y: 132, width: 70, height: widgetLineHeight,
								text: "0",
								onIncrement: () => onTrackDistOffsetChange(1),
								onDecrement: () => onTrackDistOffsetChange(-1),
							},
							// Row 5: Distribute action button
							<ButtonDesc>{
								name: trackDistButton,
								type: "button",
								x: 20, y: 160, width: 220, height: 25,
								text: "Distribute Litter",
								onClick: () => distributeTrackLitter(),
							},
						],
					},
					{
						image: {
							frameBase: 5221, //Paint brush
							frameCount: 8,
							frameDuration: 4,
						},
						widgets: [
							<LabelWidget>{
								type: "label",
								x: 0,
								y: 232,
								width: 260,
								height: widgetLineHeight,
								textAlign: "centred",
								text: "github.com/EnoxRCT/OpenRCT2-LitterEditor",
								tooltip: "Powered by Manticore_007 and Basssiiie",
								isDisabled: true,
							},
							<GroupBoxWidget>{
								type: "groupbox",
								x: 10,
								y: 55,
								width: 240,
								height: 170,
								text: "Pixel Art",
							},
							<LabelWidget>{
								type: "label",
								x: 20,
								y: 120,
								width: 220,
								height: widgetLineHeight,
								textAlign: "centred",
								text: "Under development",
							},
						],
					},
					{
						image: {
							frameBase: 5367, //info
							frameCount: 8,
							frameDuration: 4,
						},
						widgets: [
							<LabelWidget>{
								type: "label",
								x: 0,
								y: 232,
								width: 260,
								height: widgetLineHeight,
								textAlign: "centred",
								text: "github.com/EnoxRCT/OpenRCT2-LitterEditor",
								tooltip: "Powered by Manticore_007 and Basssiiie",
								isDisabled: true,
							},
							<GroupBoxWidget>{
								type: "groupbox",
								x: 10,
								y: 55,
								width: 240,
								height: 170,
								text: "Info",
							},
							<LabelWidget>{
								type: "label",
								x: 20,
								y: 120,
								width: 220,
								height: widgetLineHeight,
								textAlign: "centred",
								text: "This LitterEditor is my first expierence with coding.\n\nSpecial thanks to:\nManticore_007, Basssiiie, Smitty\nand Gymnasiast.",
							},
						],
					}
				],
			});
		}
	}
}
function selectLitter(type: EntityType): void {
	const window = ui.getWindow(windowId);
	if (!window) {
		return;
	}
	const buttonPicker = window.findWidget<ButtonWidget>(buttonPipette);
	const deleteButton = window.findWidget<ButtonWidget>(buttonDelete);
	const createLitterButton = window.findWidget<ButtonWidget>(buttonCreateLitter);
	const dropDownType = window.findWidget<DropdownWidget>(litterTypeDropDown);
	const multiplier = window.findWidget<DropdownWidget>(multiplierDropdown);
	const labelMultiplier = window.findWidget<LabelWidget>(multiplierLabel);
	const xPosition = window.findWidget<SpinnerWidget>(xPositionSpinner);
	const yPosition = window.findWidget<SpinnerWidget>(yPositionSpinner);
	const zPosition = window.findWidget<SpinnerWidget>(zPositionSpinner);
	const labelLitterType = window.findWidget<LabelWidget>(litterTypeLabel);
	const xLabel = window.findWidget<LabelWidget>(xPositionLabel);
	const yLabel = window.findWidget<LabelWidget>(yPositionLabel);
	const zLabel = window.findWidget<LabelWidget>(zPositionLabel);
	if (buttonPicker.isPressed !== false) {
		buttonPicker.isPressed = false;
		ui.tool?.cancel();
	}
	else {
		buttonPicker.isPressed = true;
		deleteButton.isPressed = false;
		createLitterButton.isPressed = false;
		ui.activateTool(
			{
				id: toolSelectLitter,
				cursor: "cross_hair",
				filter: ["entity"],
				onDown: e => {
					if (e.entityId !== undefined) {
						debug(`Entity ID: ${e.entityId}`);
						const entity = map.getEntity(e.entityId);
						const litter = <Litter>entity;
						idLitter = litter;
						if (!entity || entity.type !== type) {
							ui.showError("WARNING:", "This is not litter!");
							window.findWidget<DropdownWidget>(litterTypeDropDown).text = " ";
						}
						else {
							getLitter(litter.litterType);
							window.findWidget<ButtonWidget>(buttonPipette).isPressed = false;
							dropDownType.isDisabled = false;
							multiplier.isDisabled = false;
							labelMultiplier.isDisabled = false;
							labelLitterType.isDisabled = false;
							xPosition.isDisabled = false;
							yPosition.isDisabled = false;
							zPosition.isDisabled = false;
							xLabel.isDisabled = false;
							yLabel.isDisabled = false;
							zLabel.isDisabled = false;
							ui.tool?.cancel();
							getLitterCoords(litter);
							window.findWidget<ViewportWidget>(litterViewport).viewport.moveTo(litter);
						}
					}
				},
			});
	}
}
//Changes the litterType.

function setLitter(number: number): void {
	const window = ui.getWindow(windowId);
	const createLitterButton = window.findWidget<ButtonWidget>(buttonCreateLitter)
	const litterTypeList: LitterType[] = ["vomit", "vomit_alt", "empty_can", "rubbish", "burger_box", "empty_cup", "empty_box", "empty_bottle", "empty_bowl_red", "empty_drink_carton", "empty_juice_cup", "empty_bowl_blue"];
	if (idLitter && !createLitterButton.isPressed){idLitter.litterType = litterTypeList[number];}
	else {selectedLitterType = litterTypeList[number]; debug("littertype set");}
}
//Changes the name in the DropDownDesc.

function getLitter(type: LitterType): void {
	const window = ui.getWindow(windowId);
	const litterTypeNumber = ["vomit", "vomit_alt", "empty_can", "rubbish", "burger_box", "empty_cup", "empty_box", "empty_bottle", "empty_bowl_red", "empty_drink_carton", "empty_juice_cup", "empty_bowl_blue"];
	if (window) {
		const dropDownLitterType = window.findWidget<DropdownWidget>(litterTypeDropDown);
		if (dropDownLitterType.items !== undefined) {
			dropDownLitterType.selectedIndex = litterTypeNumber.indexOf(type);
		}
	}
}
//Remove litter.

function removeLitter(type: EntityType): void {
	const window =ui.getWindow(windowId);
	if (!window) {
		return;
	}
	const deleteButton = window.findWidget<ButtonWidget>(buttonDelete);
	const buttonPicker = window.findWidget<ButtonWidget>(buttonPipette);
	const createLitterButton = window.findWidget<ButtonWidget>(buttonCreateLitter);
	const multiplier = window.findWidget<DropdownWidget>(multiplierDropdown);
	const labelMultiplier = window.findWidget<LabelWidget>(multiplierLabel);
	const dropDownType = window.findWidget<DropdownWidget>(litterTypeDropDown);
	const xPosition = window.findWidget<SpinnerWidget>(xPositionSpinner);
	const yPosition = window.findWidget<SpinnerWidget>(yPositionSpinner);
	const zPosition = window.findWidget<SpinnerWidget>(zPositionSpinner);
	const labelLitterType = window.findWidget<LabelWidget>(litterTypeLabel);
	const xLabel = window.findWidget<LabelWidget>(xPositionLabel);
	const yLabel = window.findWidget<LabelWidget>(yPositionLabel);
	const zLabel = window.findWidget<LabelWidget>(zPositionLabel);
	if (deleteButton.isPressed !== false) {
		deleteButton.isPressed = false;
		ui.tool?.cancel();
	}
	else {
		deleteButton.isPressed = true;
		buttonPicker.isPressed = false;
		createLitterButton.isPressed = false;
		dropDownType.isDisabled = true;
		multiplier.isDisabled = true;
		labelMultiplier.isDisabled = true;
		labelLitterType.isDisabled = true;
		xPosition.isDisabled = true;
		yPosition.isDisabled = true;
		zPosition.isDisabled = true;
		xLabel.isDisabled = true;
		yLabel.isDisabled = true;
		zLabel.isDisabled = true;
		dropDownType.text = " ";
		xPosition.text = " ";
		yPosition.text = " ";
		zPosition.text = " ";
		ui.getWindow(windowId).findWidget<ViewportWidget>(litterViewport).viewport.moveTo({x: -9000, y: -9000});
		ui.activateTool(
			{
				id: toolRemoveLitter,
				cursor: "bin_down",
				filter: ["entity"],
				onDown: e => {
					if (e.entityId !== undefined) {
						debug(`Entity ID: ${e.entityId}`);
						const entity = map.getEntity(e.entityId);
						const litter = <Litter>entity;
						idLitter = litter;
						if (!entity || entity.type !== type) {
							ui.showError("WARNING:", "This is not litter!");
						}
						else {
							litter.remove();
						}
					}
				}
			}
		);
	}
}
function getLitterCoords(litterCoords: CoordsXYZ): void {
	const window = ui.getWindow(windowId);
	if (window) {
		window.findWidget<SpinnerWidget>(xPositionSpinner).text = litterCoords.x.toString();
		window.findWidget<SpinnerWidget>(yPositionSpinner).text = litterCoords.y.toString();
		window.findWidget<SpinnerWidget>(zPositionSpinner).text = litterCoords.z.toString();
	}
}
function increase(spinner: string, axis: keyof CoordsXYZ): void {
	const widget = ui.getWindow(windowId).findWidget<SpinnerWidget>(spinner);
	idLitter[axis] = idLitter[axis] +1 * multiplier;
	widget.text = idLitter[axis].toString();
	ui.getWindow(windowId).findWidget<ViewportWidget>(litterViewport).viewport.moveTo(idLitter);
}
function decrease(spinner: string, axis: keyof CoordsXYZ): void {
	const widget = ui.getWindow(windowId).findWidget<SpinnerWidget>(spinner);
	idLitter[axis] = idLitter[axis] -1 * multiplier;
	widget.text = idLitter[axis].toString();
	ui.getWindow(windowId).findWidget<ViewportWidget>(litterViewport).viewport.moveTo(idLitter);
}
function setMultiplier(number: number): void {
	if (number === 0) {multiplier = 1;}
	if (number === 1) {multiplier = 10;}
	if (number === 2) {multiplier = 100;}
}
function onTrackDistRideChanged(index: number): void {
	trackDistSelectedRideIdx = index;
}
function onTrackDistCountChange(delta: number): void {
	const newVal = trackDistCount + delta;
	if (newVal < 1 || newVal > 8) { return; }
	trackDistCount = newVal;
	const w = ui.getWindow(windowId);
	if (w) {
		w.findWidget<SpinnerWidget>(trackDistCountSpinner).text = trackDistCount.toString();
	}
}
function onTrackDistLitterTypeChanged(index: number): void {
	const typeList: LitterType[] = [
		"vomit", "vomit_alt", "empty_can", "rubbish",
		"burger_box", "empty_cup", "empty_box", "empty_bottle",
		"empty_bowl_red", "empty_drink_carton", "empty_juice_cup", "empty_bowl_blue"
	];
	if (index >= 0 && index < typeList.length) {
		trackDistLitterType = typeList[index];
	}
}
function onTrackDistOffsetChange(delta: number): void {
	const newVal = trackDistZOffset + delta;
	if (newVal < -8 || newVal > 8) { return; }
	trackDistZOffset = newVal;
	const w = ui.getWindow(windowId);
	if (w) {
		w.findWidget<SpinnerWidget>(trackDistOffsetSpinner).text = trackDistZOffset.toString();
	}
}
function rotateXY(x: number, y: number, direction: number): { x: number; y: number } {
	switch (direction & 3) {
		case 0: return { x:  x, y:  y };
		case 1: return { x:  y, y: -x };
		case 2: return { x: -x, y: -y };
		case 3: return { x: -y, y:  x };
		default: return { x, y };
	}
}
function distributeTrackLitter(): void {
	if (trackDistRideIds.length === 0 || trackDistSelectedRideIdx >= trackDistRideIds.length) {
		ui.showError("Warning:", "No valid ride selected.");
		return;
	}

	const targetRideId = trackDistRideIds[trackDistSelectedRideIdx];
	const mapSize = map.size; // CoordsXY in tile units
	const N = trackDistCount;
	let placedCount = 0;
	const processed = new Set<string>();

	for (let tileX = 0; tileX < mapSize.x; tileX++) {
		for (let tileY = 0; tileY < mapSize.y; tileY++) {

			const tile = map.getTile(tileX, tileY);
			const elements = tile.elements;

			for (let i = 0; i < elements.length; i++) {
				const el = elements[i];
				if (el.type !== "track") { continue; }

				const trackEl = <TrackElement>el;
				if (trackEl.ride !== targetRideId) { continue; }

				const segment = context.getTrackSegment(trackEl.trackType);
				if (!segment) { continue; }

				const seq = trackEl.sequence ?? 0;
				const seqOffset = segment.elements[seq] ?? { x: 0, y: 0, z: 0 };

				// Reverse the sequence offset (rotated by direction) to get origin tile world coords
				const rot = rotateXY(seqOffset.x, seqOffset.y, trackEl.direction);
				const originX = (tileX * 32) - rot.x;
				const originY = (tileY * 32) - rot.y;
				const originBaseZ = trackEl.baseZ - seqOffset.z;

				// Dedup key: each logical track piece should only be processed once
				const key = `${originX},${originY},${originBaseZ},${trackEl.trackType},${trackEl.direction}`;
				if (processed.has(key)) { continue; }
				processed.add(key);

				// Get subpositions for the whole piece (subpositionType=0 = Default vehicle path)
				const points = segment.getSubpositions(0, trackEl.direction);
				if (!points || points.length === 0) { continue; }

				// Sample N evenly-spaced points from the subposition array
				const sampleCount = Math.min(N, points.length);
				for (let k = 0; k < sampleCount; k++) {
					const idx = Math.round(k * (points.length - 1) / Math.max(sampleCount - 1, 1));
					const p = points[idx];

					const createdEntity = map.createEntity("litter", {
						x: originX + p.x,
						y: originY + p.y,
						z: originBaseZ + p.z + trackDistZOffset
					});
					const createdLitter = <Litter>createdEntity;
					createdLitter.litterType = trackDistLitterType;
					placedCount++;
				}
			}
		}
	}

	debug("Track litter distribution complete. Placed: " + placedCount);
}
//Create litter

function createLitter(type: EntityType): void {
	const window =ui.getWindow(windowId);
	if (!window) {
		return;
	}
	const createLitterButton = window.findWidget<ButtonWidget>(buttonCreateLitter);
	const deleteButton = window.findWidget<ButtonWidget>(buttonDelete);
	const buttonPicker = window.findWidget<ButtonWidget>(buttonPipette);
	const multiplier = window.findWidget<DropdownWidget>(multiplierDropdown);
	const labelMultiplier = window.findWidget<LabelWidget>(multiplierLabel);
	const dropDownType = window.findWidget<DropdownWidget>(litterTypeDropDown);
	const xPosition = window.findWidget<SpinnerWidget>(xPositionSpinner);
	const yPosition = window.findWidget<SpinnerWidget>(yPositionSpinner);
	const zPosition = window.findWidget<SpinnerWidget>(zPositionSpinner);
	const labelLitterType = window.findWidget<LabelWidget>(litterTypeLabel);
	const xLabel = window.findWidget<LabelWidget>(xPositionLabel);
	const yLabel = window.findWidget<LabelWidget>(yPositionLabel);
	const zLabel = window.findWidget<LabelWidget>(zPositionLabel);
	if (createLitterButton.isPressed !== false) {
		createLitterButton.isPressed = false;
		dropDownType.isDisabled = true;
		labelLitterType.isDisabled = true;
		dropDownType.text = " ";
		ui.tool?.cancel();
	}
	else {
		createLitterButton.isPressed = true;
		buttonPicker.isPressed = false;
		deleteButton.isPressed = false;
		dropDownType.isDisabled = false;
		multiplier.isDisabled = true;
		labelMultiplier.isDisabled = true;
		labelLitterType.isDisabled = false;
		xPosition.isDisabled = true;
		yPosition.isDisabled = true;
		zPosition.isDisabled = true;
		xLabel.isDisabled = true;
		yLabel.isDisabled = true;
		zLabel.isDisabled = true;
		dropDownType.selectedIndex = 0;
		xPosition.text = " ";
		yPosition.text = " ";
		zPosition.text = " ";
		const window = ui.getWindow(windowId);
		const widget = window.findWidget<ViewportWidget>(litterViewport);
		widget.viewport.moveTo({x: -9000, y: -9000});
		ui.activateTool({
			id: toolCreateLitter,
			cursor: "cross_hair",
			filter: ["terrain"],
			onDown: e => {
				if (e.mapCoords !== undefined) {
					debug(`Create litter: ${e.mapCoords}`);
					const axisCoords = e.mapCoords;
					const surfaceElements = getTileElements("surface", axisCoords);
					const oneSurfaceElementZValue = surfaceElements[0].element.baseZ;
					const createdEntity = map.createEntity(type, {x: axisCoords.x, y: axisCoords.y, z: oneSurfaceElementZValue});
					const createdLitter = <Litter>createdEntity;
					createdLitter.litterType = selectedLitterType;
				}
			}
		});
	}
}

					/* const z = 36;
                    createLitterLine(type, coords, z);
                    createLitterLine(type, coords, z+4);
                    createLitterLine(type, coords, z+8);
                    createLitterLine(type, coords, z+12);
                    createLitterLine(type, coords, z+16);
                    createLitterLine(type, coords, z+20);
                    createLitterLine(type, coords, z+24);
                    createLitterLine(type, coords, z+28);
                    createLitterLine(type, coords, z+32);
                    createLitterLine(type, coords, z+36);
                    createLitterLine(type, coords, z+40);
                    createLitterLine(type, coords, z+44);
					createLitterLine(type, coords, z+48);
                    
                }
            }
        })
    }
}

function createLitterLine(type: EntityType, coords: CoordsXY, z: number): void
{
	const c = 9;
    map.createEntity(type, {x: coords.x -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-4 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-8 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-12 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-16 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-20 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-24 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-28 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-32 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-36 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-40 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-44 -c, y: 642, z: z });
    map.createEntity(type, {x: coords.x-48 -c, y: 642, z: z });
	
} */