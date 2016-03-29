import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frenchText: '',
			englishText: '',
			arabicText: '',
			detectedLang: '',
			key: '',
		};
		this.translateToFrench = this.translateToFrench.bind(this);
		this.translateToArabic = this.translateToArabic.bind(this);
		this.translateToEnglish = this.translateToEnglish.bind(this);
	}

	translateToFrench() {
		const originalText = this.refs.originalText.value;
		if (!originalText) {
			return;
		}
		const url = `https://www.googleapis.com/language/translate/v2?key=${this.state.key}&target=fr&q=${originalText}`;
		$.get(url, (response) => {
			const data = response.data.translations;
			const frenchText = data[0] && data[0].translatedText ? $('<div/>').html(data[0].translatedText).text() : '';
			const detectedLang = data[0] && data[0].detectedSourceLanguage ?
			data[0].detectedSourceLanguage : '';

			this.setState({
				frenchText,
				detectedLang,
			});
		});
	}

	translateToArabic() {
		const originalText = this.refs.originalText.value;
		if (!originalText) {
			return;
		}
		const url = `https://www.googleapis.com/language/translate/v2?key=${this.state.key}&target=ar&q=${originalText}`;
		$.get(url, (response) => {
			const data = response.data.translations;
			const arabicText = data[0] && data[0].translatedText ? $('<div/>').html(data[0].translatedText).text() : '';
			const detectedLang = data[0] && data[0].detectedSourceLanguage ?
			data[0].detectedSourceLanguage : '';

			this.setState({
				arabicText,
				detectedLang,
			});
		});
	}

	translateToEnglish() {
		const originalText = this.refs.originalText.value;
		if (!originalText) {
			return;
		}
		const url = `https://www.googleapis.com/language/translate/v2?key=${this.state.key}&target=en&q=${originalText}`;
		$.get(url, (response) => {
			const data = response.data.translations;
			const englishText = data[0] && data[0].translatedText ? $('<div/>').html(data[0].translatedText).text() : '';
			const detectedLang = data[0] && data[0].detectedSourceLanguage ?
			data[0].detectedSourceLanguage : '';

			this.setState({
				englishText,
				detectedLang,
			});
		});
	}

	render() {
		return (
			<div className="row center-align">
				<h4 className="indigo-text text-darken-1">Google translate demo</h4>
				<div className="divider"></div>
				<div className="col s12 offset-s2">
					<div className="row">
						<div className="input-field col s8">
						<textarea className="materialize-textarea" ref="originalText"></textarea>
						<label>Original Text</label>
						<a className="waves-effect waves-light btn left indigo" onClick={this.translateToEnglish}>
						Translate to English</a>
						<a className="waves-effect waves-light btn indigo" onClick={this.translateToFrench}>
						Translate to French</a>
						<a className="waves-effect waves-light btn right indigo" onClick={this.translateToArabic}>
						Translate to Arabic</a>
						</div>
					</div>
					<div className="row custom-margin">
						<div className="col s8">
						<label className="custom-label">English Text</label>
						<pre>{this.state.englishText}</pre>
					</div>
					</div>
					<div className="row">
					<div className="col s8">
						<label className="custom-label">French Text</label>
						<pre>{this.state.frenchText}</pre>
					</div>
					</div>
					<div className="row">
						<div className="col s8">
						<label className="custom-label">Arabic Text</label>
						<pre>{this.state.arabicText}</pre>
					</div>
					</div>
					<div className="row">
						<span className="detected-lang">Detected language: {this.state.detectedLang}</span>
					</div>
				</div>
			</div>
		);
	}
}
