import * as chartCommonModule from "../ui-chart.common";
import * as chartInitializersCommon from '../initializers/chart-initializers.common';
import { ChartSeries, CartesianSeries, BarSeries, CategoricalSeries, PieSeries, DonutSeries, RangeBarSeries, BubbleSeries, OhlcSeries, ScatterSeries, ScatterBubbleSeries } from "../visualization/views/chart-series.common";
import { CartesianAxis, CategoricalAxis, DateTimeCategoricalAxis } from "../visualization/views/chart-axis.common";
import { RadLegendView } from "../visualization/views/chart-legend-view.common";
import { Palette } from "../visualization/parts/chart-palette.common";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
export declare class ChartBaseValueMapper implements chartInitializersCommon.ChartBaseValueMapper {
    onLegendChanged(oldValue: RadLegendView, newValue: RadLegendView, chart: chartCommonModule.RadChartBase): void;
    onPalettesChanged(data: ChangedData<any>, chart: chartCommonModule.RadChartBase): void;
    onPalettesPropertyChanged(oldValue: ObservableArray<Palette>, newValue: ObservableArray<Palette>, chart: chartCommonModule.RadChartBase): void;
    onSeriesChanged(data: ChangedData<any>, chart: chartCommonModule.RadChartBase): void;
    onSeriesPropertyChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>, chart: chartCommonModule.RadChartBase): void;
    onAnnotationsChanged(data: ChangedData<any>, chart: chartCommonModule.RadChartBase): void;
    onAnnotationsPropertyChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>, chart: chartCommonModule.RadChartBase): void;
    onSelectionModeChanged(oldValue: string, newValue: string, chart: chartCommonModule.RadChartBase): void;
    loadSeries(chart: chartCommonModule.RadChartBase): void;
    loadAnnotations(chart: chartCommonModule.RadChartBase): void;
    reloadPalettes(chart: chartCommonModule.RadChartBase): void;
    updateHorizontalAxisPalette(chart: chartCommonModule.RadChartBase): void;
    updateVerticalAxisPalette(chart: chartCommonModule.RadChartBase): void;
}
export declare class ChartSeriesValueMapper implements chartInitializersCommon.ChartSeriesValueMapper {
    onLegendTitleChanged(newValue: string, series: ChartSeries): void;
    onItemsChanged(oldValue: any, newValue: any, series: ChartSeries): void;
    onValuePropertyChanged(oldValue: any, newValue: any, series: ChartSeries): void;
    onShowLabelsChanged(oldValue: boolean, newValue: boolean, series: ChartSeries): void;
    onLabelStyleChanged(oldValue: any, newValue: any, series: ChartSeries): void;
    onSelectionModeChanged(oldValue: string, newValue: string, series: ChartSeries): void;
    applyLabelStyle(series: ChartSeries, chart?: chartCommonModule.RadChartBase): void;
}
export declare class CartesianSeriesValueMapper extends ChartSeriesValueMapper {
    onHorizontalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis, series: CartesianSeries): void;
    onVerticalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis, series: CartesianSeries): void;
    onPaletteModeChanged(oldValue: string, newValue: string, series: CartesianSeries): void;
}
export declare class SplineSeriesValueMapper extends CartesianSeriesValueMapper implements chartInitializersCommon.SplineSeriesValueMapper {
    onCategoryPropertyChanged(oldValue: string, newValue: string, series: CategoricalSeries): void;
    onStackModePropertyChanged(oldValue: string, newValue: string, series: CategoricalSeries): void;
    updateNative(series: CategoricalSeries): void;
    onHorizontalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis, series: CartesianSeries): void;
    onVerticalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis, series: CartesianSeries): void;
}
export declare class SplineAreaSeriesValueMapper extends SplineSeriesValueMapper {
}
export declare class CategoricalSeriesValueMapper extends CartesianSeriesValueMapper {
    onCategoryPropertyChanged(oldValue: string, newValue: string, series: CategoricalSeries): void;
    onStackModePropertyChanged(oldValue: string, newValue: string, series: CategoricalSeries): void;
    updateNative(series: CategoricalSeries): void;
}
export declare class PieSeriesValueMapper extends ChartSeriesValueMapper {
    onLabelPropertyChanged(oldValue: string, newValue: string, series: PieSeries): void;
    onExpandRadiusChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onOuterRadiusFactorChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onStartAngleChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onEndAngleChanged(oldValue: number, newValue: number, series: PieSeries): void;
    onShowPercentageChanged(oldValue: boolean, newValue: boolean, series: PieSeries): void;
}
export declare class DonutSeriesValueMapper extends PieSeriesValueMapper {
    onInnerRadiusFactorChanged(oldValue: any, newValue: any, series: DonutSeries): void;
}
export declare class BarSeriesValueMapper extends CategoricalSeriesValueMapper {
    onMinBarSizeChanged(oldValue: number, newValue: number, series: BarSeries): void;
    onMaxBarSizeChanged(oldValue: number, newValue: number, series: BarSeries): void;
}
export declare class RangeBarSeriesValueMapper extends CategoricalSeriesValueMapper {
    onHighPropertyNameChanged(oldValue: string, newValue: string, series: RangeBarSeries): void;
    onLowPropertyNameChanged(oldValue: string, newValue: string, series: RangeBarSeries): void;
}
export declare class LineSeriesValueMapper extends CategoricalSeriesValueMapper {
}
export declare class BubbleSeriesValueMapper extends CategoricalSeriesValueMapper {
    onBubbleSizePropertyChanged(oldValue: string, newValue: string, series: BubbleSeries): void;
    onBubbleScalePropertyChanged(oldValue: number, newValue: number, series: BubbleSeries): void;
}
export declare class CartesianAxisValueMapper implements chartInitializersCommon.CartesianAxisValueMapper {
    onLineHiddenChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onLineThicknessChanged(oldValue: number, newValue: number, axis: CartesianAxis): void;
    onLineColorChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onLabelTextColorChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onLabelMarginChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelRotationAngleChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelFitModeChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelLayoutModeChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onLabelFormatChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onHorizontalLocationChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onVerticalLocationChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
    onLabelSizeChanged(oldValue: any, newValue: any, axis: CartesianAxis): void;
    onAllowZoomChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onAllowPanChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onHiddenChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onTicksHiddenChanged(oldValue: boolean, newValue: boolean, axis: CartesianAxis): void;
    onTicksThicknessChanged(oldValue: number, newValue: number, axis: CartesianAxis): void;
    onTicksOffsetChanged(oldValue: number, newValue: number, axis: CartesianAxis): void;
    onTicksLengthChanged(oldValue: number, newValue: number, axis: CartesianAxis): void;
    onTicksColorChanged(oldValue: string, newValue: string, axis: CartesianAxis): void;
}
export declare class AreaSeriesValueMapper extends LineSeriesValueMapper {
}
export declare class CategoricalAxisValueMapper extends CartesianAxisValueMapper {
    onMajorTickIntervalChanged(oldValue: number, newValue: number, axis: CategoricalAxis): void;
    onPlotModeChanged(oldValue: string, newValue: string, axis: CategoricalAxis): void;
    onLastLabelVisibilityChanged(oldValue: string, newValue: string, axis: CategoricalAxis): void;
    onFirstLabelVisibilityChanged(oldValue: string, newValue: string, axis: CategoricalAxis): void;
}
export declare class DateTimeAxisValueMapper extends CategoricalAxisValueMapper {
    onDateTimeComponentChanged(oldValue: string, newValue: string, axis: DateTimeCategoricalAxis): void;
    onDateFormatChanged(oldValue: string, newValue: string, axis: DateTimeCategoricalAxis): void;
    onSourceDateFormatChanged(oldValue: string, newValue: string, axis: DateTimeCategoricalAxis): void;
}
export declare class OhlcSeriesValueMapper extends CategoricalSeriesValueMapper {
    onHighPropertyNameChanged(oldValue: string, newValue: string, series: OhlcSeries): void;
    onLowPropertyNameChanged(oldValue: string, newValue: string, series: OhlcSeries): void;
    onOpenPropertyNameChanged(oldValue: string, newValue: string, series: OhlcSeries): void;
    onClosePropertyNameChanged(oldValue: string, newValue: string, series: OhlcSeries): void;
}
export declare class CandlestickSeriesValueMapper extends OhlcSeriesValueMapper {
}
export declare class ScatterSeriesValueMapper extends CartesianSeriesValueMapper {
    onXPropertyChanged(oldValue: string, newValue: string, series: ScatterSeries): void;
    onYPropertyChanged(oldValue: string, newValue: string, series: ScatterSeries): void;
}
export declare class ScatterBubbleSeriesValueMapper extends ScatterSeriesValueMapper {
    onBubbleSizePropertyChanged(oldValue: string, newValue: string, series: ScatterBubbleSeries): void;
    onBubbleScaleChanged(oldValue: number, newValue: number, series: ScatterBubbleSeries): void;
}
