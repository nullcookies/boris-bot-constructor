<template>
	<div class="row items-center name-wrapper"
	     @touchstart.stop
	     @mousedown.stop
	>
		<q-icon name="far fa-clock"
		        size="sm"
		        class="text-primary"
		/>

		<p class="column q-ma-none q-ml-xs name">
			<b>{{`${$t('base.block')} ${block.index}`}}</b>
			{{$t(`base.types.${block.type}`)}}
		</p>
	</div>
</template>

<script>
	export default {
		name: 'header-block-name',
		props: {
			block: {
				type: Object
			}
		}
	};
</script>

<style lang="scss" scoped>
	.name {
		line-height: 1.2;
	}
</style>
