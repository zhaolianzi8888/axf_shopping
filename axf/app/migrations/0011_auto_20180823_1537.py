# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-08-23 07:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_cartmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderAndGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('o_count', models.IntegerField(default=1)),
                ('o_goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Goods')),
            ],
            options={
                'db_table': 'axf_orderandgoods',
            },
        ),
        migrations.CreateModel(
            name='OrderModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('o_number', models.CharField(max_length=32)),
                ('o_status', models.IntegerField(default=0)),
                ('o_create_time', models.DateField(auto_now=True)),
                ('o_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.UserModel')),
            ],
            options={
                'db_table': 'axf_order',
            },
        ),
        migrations.AddField(
            model_name='orderandgoods',
            name='o_number',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.OrderModel'),
        ),
    ]
