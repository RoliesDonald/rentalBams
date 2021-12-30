<div class="xoo-aff-field-section xoo-aff-field-section-{{data.id}}">
	<label class="xoo-aff-section-label">{{data.title}}</label>
	<div>
	
	
<div class="xoo-aff-setting-{{data.type}} xoo-aff-setting-{{data.id}} xoo-aff-fs-{{data.width}} xoo-aff-fs-input {{{ ( data.required && data.required === 'yes' ) ? 'xoo-aff-required' : '' }}}" data-id="{{data.id}}">
	<label for="xoo_aff_{{data.id}}">{{data.title}}
		
		<div class="xoo-aff-info">
			<span class="xoo-aff-info-icon fas fa-info-circle"></span>
			<span class="xoo-aff-infotext">{{data.info}}</span>
		</div>
		
	</label>

	
		<input type="text" id="xoo_aff_{{data.id}}" name="xoo_aff_{{data.id}}" placeholder="{{data.placeholder}}" value="{{data.value}}" class="{{data.class}}">
	

	
		<label for="xoo_aff_{{data.id}}" class="xoo-aff-switch">
		  <input type="checkbox" id="xoo_aff_{{data.id}}" name="xoo_aff_{{data.id}}" value="yes" data.value="==" :>
		  <span class="xoo-aff-slider"></span>
		</label>
	

	
		<input type="number" id="xoo_aff_{{data.id}}" name="xoo_aff_{{data.id}}" min="{{data.minlength}}" placeholder="{{data.placeholder}}" class="{{data.class}}" value="{{data.value}}">
	


	
		<input type="text" class="xoo-aff-iconpicker" name="xoo_aff_{{data.id}}" id="xoo_aff_{{data.id}}" placeholder="{{data.placeholder}}" value="{{data.value}}" autocomplete="off">
	

	
		<input type="text" class="xoo-aff-datepicker" name="xoo_aff_{{data.id}}" id="xoo_aff_{{data.id}}" placeholder="{{data.placeholder}}" value="{{data.value}}" autocomplete="off">
	

	
		<select id="xoo_aff_{{data.id}}" class="{{data.class}}" name="xoo_aff_{{data.id}}">
			
				<option value="{{option_value}}" data.value="==" option_value :>{{option_title}}</option>
			
		</select>
	

	
		<div class="xoo-aff-multiple-options" id="xoo_aff_{{data.id}}">
			<button class="xoo-add-option"><span class="fas fa-plus-circle"></span></button>
			<ul class="xoo-aff-options-list">
				
					<li class="xoo-aff-opt">
						<span class="fas fa-bars"></span>

						
							<input type="checkbox" class="option-check">
						

						
							<input type="radio" name="xoo_aff_radio_single" class="option-check">
						

						<input type="text" value="{{option.label}}" class="mcb-label" placeholder="Label">
						<input type="text" value="{{option.value}}" class="mcb-value" placeholder="Value">
						<span class="mcb-del fas fa-minus-circle"></span>
					</li>
				
			</ul>
			<input type="hidden" class="xoo-aff-trigger-change" id="xoo_aff_{{data.id}}" name="xoo_aff_{{data.id}}">
		</div>
	


	
		
		<div class="xoo-aff-select-multiple-container">
			<select multiple id="xoo_aff_{{data.id}}" class="xoo-aff-select-multiple" style="display: none;">
				
					<option value="{{option_value}}" class="{{ data.value[option_value] && (data.value[option_value]).checked === 'checked' ? 'aff-default' : '' }}" data.value :>{{option_title}}</option>
				
			</select>

			<div class="xoo-aff-select-multiple-textarea">
				<ul>
					
					<li data-value="{{option_value}}" class="{{option_data.checked === 'checked' ? 'aff-default' : ''}}">
<span class="xoo-aff-sel-remove dashicons dashicons-no-alt"></span>{{option_data.label}}</li>
					
				</ul>
			</div>

			<ul class="xoo-aff-multiple-list">
				
					<li data-value="{{option_value}}">{{option_title}}</li>
				
			</ul>
			<input type="hidden" class="xoo-aff-trigger-change" id="xoo_aff_{{data.id}}" name="xoo_aff_{{data.id}}">
		</div>
	
</div>
	


	</div>
</div>